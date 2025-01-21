---
title: "How to Easily Install LibreOffice on Arch Linux"
published: 2025-01-21
category: "Installation Guide"
tags:
  - libreoffice
---
LibreOffice is a powerful and free office suite that's perfect for both personal and professional use. In this article, we'll guide you through the steps to install LibreOffice on Arch Linux, a popular rolling-release Linux distribution. Whether you're a seasoned Arch user or a beginner, this tutorial will ensure you have LibreOffice up and running in no time.

## Prerequisites

Before installing LibreOffice, ensure the following:
1. You have a stable internet connection.
2. Your system is up to date. Run:
   ```bash
   sudo pacman -Syu
   ```
---

## Step-by-Step

### 1. **Open Terminal**  
   Launch your terminal application to execute the commands.

### 2. **Update Your System**  
   Ensure your system is updated to avoid compatibility issues:
   ```bash
   sudo pacman -Syu
   ```

### 3. **Search for LibreOffice Packages**  
   Arch Linux allows you to choose different versions of LibreOffice:
   ```bash
   pacman -Ss libreoffice
   ```
   You will see options like:
   - `libreoffice-fresh` (latest features)
   - `libreoffice-still` (stable and well-tested version)

### 4. **Install the Preferred Version**  
   For the latest features, install `libreoffice-fresh`:
   ```bash
   sudo pacman -S libreoffice-fresh
   ```
   If you prefer stability, install `libreoffice-still`:
   ```bash
   sudo pacman -S libreoffice-still
   ```

### 5. **Install Language Packs (Optional)**  
   To add support for specific languages:
   ```bash
   sudo pacman -S libreoffice-fresh-id
   ```
   Replace `id` with the desired language code (e.g., `en` for English, `id` for Indonesian).

### 6. **Verify Installation**  
   Launch LibreOffice from the application menu or by typing:
   ```bash
   libreoffice
   ```
---

## FAQs

1. **What is the difference between `libreoffice-fresh` and `libreoffice-still`?**  <br>
`libreoffice-fresh` includes the latest features and updates, while `libreoffice-still` provides a stable version for users who prefer reliability.

2. **How can I uninstall LibreOffice if I no longer need it?**  <br>
You can remove LibreOffice with this command:
    ```bash
    sudo pacman -R libreoffice-fresh
    ```

3. **Can I install LibreOffice extensions on Arch Linux?**  <br>
Yes, you can install extensions directly from LibreOffice. Go to **Tools > Extension Manager** or visit [LibreOffice Extensions](https://extensions.libreoffice.org).

### Conclusion

Installing LibreOffice on Arch Linux is straightforward, thanks to its well-maintained package manager, Pacman. Whether you're looking for cutting-edge features or a stable office suite, LibreOffice has you covered. Start using it today and experience a seamless office solution on Linux.
