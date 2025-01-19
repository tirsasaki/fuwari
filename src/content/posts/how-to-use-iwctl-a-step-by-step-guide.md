---
title: 'How to Use iwctl: A Step-by-Step Guide'
published: 2025-01-19
category: 'Command-Line Tools'
tags:
  - Iwctl
---
**Iwctl** is a lightweight and efficient CLI tool for managing WiFi on Linux. This article provides a step-by-step guide on installing, using, and configuring iwctl through its configuration files to optimize your WiFi connections.

## **What is iwctl?**

`Iwctl` is a CLI for **iwd (iNet Wireless Daemon)**, a modern wireless daemon for Linux. Compared to `wpa_supplicant`, iwd is lighter, faster, and more user-friendly.

## Prerequisites
- A Linux system with iwd installed
- A wireless network interface
- Root or sudo privileges

## Steps to Use IWCTL

1. **Open Terminal and Start IWCTL**

```
iwctl
```  

2. **List Wireless Devices** <br>
```
device list 
```
This displays detected Wi-Fi devices.

3. **List Available Wi-Fi Networks**
```
station <device_name> get-networks 
```
Replace `<device_name>` with your device name.
> [!TIP] 
> **<device_name>** is usually `wlan0`

4. **Connect to a Wi-Fi Network**  
```
station <device_name> connect SSID 
```
Enter the password when prompted.

5. **Verify Connection**
```
station <device_name> show 
```
To see connection status

6. **Exit IWCTL**
```
exit
```
---
## Additional Commands
To forget a network:
```
known-networks [SSID] forget
```

## Common Troubleshooting Tips

1. If the device isn't showing up, ensure that:

   - Your wireless card is not blocked (check using `rfkill list`)
   - The iwd service is running (`systemctl status iwd`)


2. If you can't connect:

    - Double-check the network password
    - Ensure you're within range of the network
    - Verify that your wireless interface is not in airplane mode

### FAQ

  1. **What to do if IWCTL doesn’t detect the Wi-Fi device?**  
    Verify if your device is recognized using `lsusb` or `lspci`, and ensure drivers are installed.

  2. **How can I save a Wi-Fi connection for automatic reconnection?**  
    IWCTL automatically saves the network after a successful connection.

  3. **Does IWCTL support WPA3 security?**  
    Yes, IWCTL supports WPA3 security if your hardware is compatible.

IWCTL is a simple yet powerful tool for managing Wi-Fi networks on Linux. By using this tool, you can save time and resources without needing additional software.
