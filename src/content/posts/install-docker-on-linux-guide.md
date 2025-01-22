---
title: "How to Install and Use Docker on Linux"
published: 2025-01-23
category: "DevOps"
tags:
  - Docker
  - Containerization
---

Docker has revolutionized the way developers build, ship, and run applications by leveraging containerization. For Linux users, Docker offers an efficient and scalable way to manage applications. This article will guide you through the installation and usage of Docker on Linux, enabling you to harness its full potential.

---

## Prerequisites

Before installing Docker, ensure your Linux system meets the following requirements:

- A 64-bit operating system.
- Kernel version 3.10 or higher.
- Root or sudo privileges.

To check your kernel version, run:
```bash
uname -r
```

---
## Step by step
### Step 1: Update Your System

Ensure your package manager is up to date to avoid conflicts during installation:
```bash
sudo apt update && sudo apt upgrade -y
```

### Step 2: Install Docker
**On Ubuntu:**
1. Add Docker’s official GPG key:
   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

2. Set up the Docker repository:
   ```bash
   echo \"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

3. Install Docker:
   ```bash
   sudo apt update
   sudo apt install docker-ce docker-ce-cli containerd.io -y
   ```

**On CentOS:**
1. Remove older Docker versions:
   ```bash
   sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
   ```

2. Set up the repository:
   ```bash
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
   ```

3. Install Docker:
   ```bash
   sudo yum install docker-ce docker-ce-cli containerd.io -y
   ```


### Step 3: Start and Enable Docker

After installation, start the Docker service and ensure it runs on startup:
```bash
sudo systemctl start docker
sudo systemctl enable docker
```

Verify that Docker is running:
```bash
sudo systemctl status docker
```

### Step 4: Test Docker Installation

Run the following command to verify Docker is working correctly:
```bash
sudo docker run hello-world
```
If Docker is installed correctly, you will see a message indicating that the installation is successful.

---

## Basic Docker Commands

Here are some essential Docker commands to get you started:

- **Check Docker version**:
  ```bash
  docker --version
  ```

- **List running containers**:
  ```bash
  docker ps
  ```

- **List all containers**:
  ```bash
  docker ps -a
  ```

- **Pull an image**:
  ```bash
  docker pull [image_name]
  ```

- **Stop a container**:
  ```bash
  docker stop [container_id]
  ```

- **Remove a container**:
  ```bash
  docker rm [container_id]
  ```

---

## FAQs

1. **What are the system requirements for installing Docker on Linux?**
   Docker requires a 64-bit OS, a kernel version of 3.10 or higher, and root or sudo access.

2. **How do I verify that Docker is running on my Linux system?**
   Use the command `sudo systemctl status docker` or run `sudo docker run hello-world` to ensure Docker is working correctly.

3. **Can I install Docker on all Linux distributions?**
   Docker supports most major Linux distributions, including Ubuntu, CentOS, Debian, Fedora, and more. Check the official Docker documentation for compatibility.

---

### Conclusion

Installing and using Docker on Linux is a straightforward process that unlocks powerful capabilities for developers and system administrators. Whether you're managing applications or building CI/CD pipelines, Docker offers unmatched efficiency and scalability.
