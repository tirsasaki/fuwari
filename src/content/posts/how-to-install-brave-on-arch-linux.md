---
title: 'How to Install Brave Browser on Arch Linux'
published: 2025-01-19
category: 'Installation Guide'
tags:
  - Brave Browser
  - Arch Linux
---

[Brave Browser](https://aur.archlinux.org/packages/brave-bin) is a privacy-focused, fast, and secure web browser that blocks ads and trackers by default. If you're an Arch Linux user, installing Brave is straightforward. This guide will show you step-by-step how to install Brave on your Arch Linux system.

---

## Prerequisites
- A system running `Arch Linux` or an Arch-based distribution like Manjaro.
- Basic knowledge of using the terminal.

---

## Install steps

### Step 1: Update Your System
Before installing any new package, update your system to ensure all repositories and packages are up-to-date. Open your terminal and run:
```bash
sudo pacman -Syu
```

### Step 2: Install Yay (Optional)
Yay is a popular AUR (Arch User Repository) helper that simplifies installing packages from the AUR. If you don’t have Yay installed, you can do so with:
```bash
sudo pacman -S git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### Step 3: Install Brave Browser
Brave is available in the AUR. Use Yay to install it:
```bash
yay -S brave-bin
```
This command will fetch and install the Brave Browser binary package from the AUR.

### Step 4: Verify Installation
Once the installation is complete, verify it by running:
```bash
brave
```
The Brave Browser should launch successfully.

### Step 5: (Optional) Set Brave as Your Default Browser
To set Brave as your default browser, follow these steps:
- Open Brave and go to Settings > Get Started.
- Under the "Default browser" section, click on "Make default."

---

## FAQs
1. **Can I install Brave without using an AUR helper like Yay?** <br>
Yes, you can manually clone the Brave package from the AUR using git and build it using makepkg. For example:
```bash
git clone https://aur.archlinux.org/brave-bin.git
cd brave-bin
makepkg -si
```
2. **Is Brave Browser safe to use on Arch Linux?** <br>
Yes, Brave Browser is safe to use. It prioritizes user privacy and comes with built-in ad and tracker blocking features.
3. **How do I update Brave Browser on Arch Linux?** <br>
If you installed Brave via Yay, updating it is as simple as running: `yay -Syu`

---

## Conclusion
Installing Brave Browser on Arch Linux is quick and easy, especially with the help of an AUR helper like Yay. Whether you’re looking for a secure browser or a privacy-centric alternative, Brave is a solid choice for Arch Linux users.

By following this guide, you should now have Brave Browser up and running. Happy browsing! 🚀