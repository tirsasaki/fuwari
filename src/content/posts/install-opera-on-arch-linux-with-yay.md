---
title: 'How to Install Opera on Arch Linux Using Yay'
published: 2025-01-24
# image: /src/assets/img/opera.png
category: 'Installation Guide'
tags: 
    - opera 
    - archlinux
    - browser
---

![opera](../../img/opera.png)

Opera is a sleek, feature-rich browser with built-in ad blocking, a free VPN, and customizable tools, making it an attractive choice for Linux users. However, since Opera is not included in the official Arch Linux repositories, you'll need to install it from the Arch User Repository (AUR). This guide will show you how to do that using the `yay` AUR helper.

---

## Steps to Install Opera on Arch Linux Using Yay

### 1. **Install Yay (if not already installed)**  
If you haven't installed `yay`, follow these steps to set it up:  

```bash
sudo pacman -S git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### 2. **Search for Opera in AUR**  
Once `yay` is installed, search for available Opera packages:  

```bash
yay -Ss opera
```

You should see the following options:
- `opera` (Stable version)
- `opera-beta` (Beta version)
- `opera-developer` (Developer version)

### 3. **Install Opera**  
To install the stable version of Opera, run:  

```bash
yay -S opera
```

If you'd prefer the beta or developer versions, use:
```bash
yay -S opera-beta
# or
yay -S opera-developer
```

```
❯ yay -S opera
AUR Explicit (1): opera-116.0.5366.21-1
:: (1/1) Downloaded PKGBUILD: opera
 1 opera                                    (Build Files Exist)
==> Packages to cleanBuild?
==> [N]one [A]ll [Ab]ort [I]nstalled [No]tInstalled or (1 2 3, 1-3, ^4)
==> 
```

### 4. **Launch Opera**  
Once the installation is complete, start Opera using:  

```bash
opera
```

---

### Troubleshooting Common Issues

- **"yay: Command not found"**  
  Ensure `yay` is properly installed. Reinstall it by following the steps in step 1.

- **Dependencies not found**  
  Run the following to update your system:  
  ```bash
  sudo pacman -Syu
  ```

- **Opera crashes or doesn't open**  
  Ensure your system is updated and that no corrupted files exist:
  ```bash
  yay -Syu
  ```

---

## FAQs

1. **Why is Opera not available in the official Arch Linux repositories?**  
   Opera is a proprietary browser, and Arch Linux primarily focuses on free and open-source software. It is, however, available in the Arch User Repository (AUR).

2. **How do I update Opera installed through AUR?**  
   You can update all AUR packages, including Opera, with the following command:  
   ```bash
   yay -Syu
   ```

3. **Can I install multiple versions of Opera (e.g., stable and beta)?**  
   No, typically, only one version of Opera can be installed at a time unless you use containers or virtual environments.

---

### Conclusion

By following this guide, you can easily install and enjoy Opera on Arch Linux using `yay`. Whether you need the stable version or want to try the latest beta or developer features, the process is straightforward with the help of the AUR and `yay`.
