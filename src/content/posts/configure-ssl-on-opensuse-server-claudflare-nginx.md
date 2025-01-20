---
title: 'How to Configure SSL on OpenSUSE Server with Cloudflare and Nginx'
published: 2025-01-19
category: 'Server Administration'
tags:
    - opensuse 
    - cloudflare 
    - nginx
---

Securing your `OpenSUSE server` with SSL is crucial for protecting data and ensuring secure connections. By leveraging Cloudflare's free SSL services, you can simplify this process while enhancing performance and security. This guide will focus on configuring SSL for Nginx on an OpenSUSE server using `Cloudflare`.

---

## Prerequisites

1. **A Domain Name**: Ensure your domain is registered and connected to Cloudflare.
2. **OpenSUSE Server**: A running instance of OpenSUSE with root or sudo access.
3. **Cloudflare Account**: An active account with your domain added to Cloudflare.
4. **Nginx Installed**: [Nginx](https://www.digicert.com/kb/csr-ssl-installation/nginx-openssl.htm) must be installed and running on your server.

> [!WARNING]
> Before proceeding with these steps, it is highly recommended to back up all critical files and configurations on your server. This ensures that you can restore your system in case something goes wrong during the setup process.
---
## Install steps
### Step 1: Update Your OpenSUSE Server

Start by updating your server packages:

```bash
sudo zypper refresh
sudo zypper update
```

Restart the server if necessary:

```bash
sudo reboot
```

### Step 2: Install Nginx

If Nginx is not already installed, you can install it using:

```bash
sudo zypper install nginx
```

Start and enable Nginx to run on boot:

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Step 3: Configure Cloudflare SSL

1. Log in to your Cloudflare account.
2. Navigate to the **SSL/TLS** section in the dashboard.
3. Set the SSL/TLS encryption mode to **Full** or **Full (Strict)**. The "Full (Strict)" mode ensures a secure connection between Cloudflare and your server using a valid certificate.

### Step 4: Generate an Origin Certificate in Cloudflare

1. In the **SSL/TLS** section, go to **Origin Server**.
2. Choose Let Cloudflare **generate a private key and a CSR (RSA 2048)**, Certificate Validity *15 Years* and click **Create**.
3. Copy the certificate and private key provided by Cloudflare.

### Step 5: Install the Origin Certificate on OpenSUSE

1. Save the certificate and private key to your server:

   ```bash
   sudo mkdir -p /etc/ssl/cloudflare
   sudo nano /etc/ssl/cloudflare/origin.pem
   ```
   Paste the certificate content and save the file.

   ```bash
   sudo nano /etc/ssl/cloudflare/origin.key
   ```
   Paste the private key content and save the file.

2. Set appropriate permissions:

   ```bash
   sudo chmod 600 /etc/ssl/cloudflare/origin.key
   sudo chmod 644 /etc/ssl/cloudflare/origin.pem
   ```

### Step 6: Configure Nginx for SSL

Edit the Nginx configuration file for your domain:

```bash
sudo nano /etc/nginx/conf.d/your-domain.conf
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name your-domain.com www.your-domain.com;

    ssl_certificate /etc/ssl/cloudflare/origin.pem;
    ssl_certificate_key /etc/ssl/cloudflare/origin.key;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers "ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384";

    root /var/www/html;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Save and exit the file.

Test the Nginx configuration:

```bash
sudo nginx -t
```

If there are no errors, restart Nginx:

```bash
sudo systemctl restart nginx
```

### Step 7: Verify the SSL Configuration

1. Use an SSL checker tool to ensure the certificate is properly installed.
2. Access your website using `https://your-domain.com` to verify the secure connection.

---

## FAQs

1. Why use Cloudflare's SSL instead of a traditional SSL provider? <br>
Cloudflare's SSL is free and provides additional features like DDoS protection, content caching, and performance optimization.

2. What does the `return 301 https://$host$request_uri;` line do in the Nginx configuration? <br>
It redirects all HTTP traffic to HTTPS, ensuring secure connections to your site.

3. Can I use this guide for other Linux distributions? <br>
Yes, but package management and configuration paths may differ. Adjust commands accordingly for distributions like Ubuntu or CentOS.
