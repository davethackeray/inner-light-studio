# GitHub SSH Setup Guide

## 1. Check for Existing SSH Keys
```bash
ls -al ~/.ssh
```
Look for files named:
- id_rsa.pub
- id_ed25519.pub

## 2. Generate New SSH Key
If no existing keys, generate new one:
```bash
# Generate new ED25519 key (recommended)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Or generate RSA key (legacy systems)
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

## 3. Start SSH Agent
```bash
# Start the ssh-agent in the background
eval "$(ssh-agent -s)"

# Add your SSH private key to the ssh-agent
ssh-add ~/.ssh/id_ed25519  # or ~/.ssh/id_rsa for RSA keys
```

## 4. Add Key to GitHub
1. Copy your public key:
```bash
# For ED25519 keys
cat ~/.ssh/id_ed25519.pub

# For RSA keys
cat ~/.ssh/id_rsa.pub
```

2. Go to GitHub:
   - Click your profile photo
   - Settings
   - SSH and GPG keys
   - New SSH key
   - Paste your key
   - Add SSH key

## 5. Test Connection
```bash
ssh -T git@github.com
```
You should see: "Hi username! You've successfully authenticated..."

## 6. Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

## 7. Update Remote URL
If you already added a remote with HTTPS, update it to SSH:
```bash
git remote set-url origin git@github.com:inner-light-studio/site.git
```

## Troubleshooting

### Permission Denied
If you see "Permission denied (publickey)":
1. Verify your SSH key is added to ssh-agent:
```bash
ssh-add -l
```

2. Verify your public key is on GitHub:
- Check Settings > SSH Keys

3. Verify connection:
```bash
ssh -vT git@github.com
```

### Multiple Keys
If you have multiple SSH keys, specify which to use in ~/.ssh/config:
```
Host github.com
  IdentityFile ~/.ssh/id_ed25519
  UseKeychain yes
  AddKeysToAgent yes
```

### Windows-Specific
On Windows:
1. Use Git Bash for SSH commands
2. Ensure OpenSSH is installed
3. Use `start-ssh-agent` if needed

## Security Best Practices

1. Use ED25519 keys (more secure than RSA)
2. Always use a passphrase
3. Keep private key secure
4. Never share private key
5. Use different keys for different services
6. Regularly audit and rotate keys

## After Setup

Once SSH is configured, you can run:
```bash
# Create and switch to develop branch
git branch develop
git checkout develop

# Rename master to main
git branch -M main

# Add remote
git remote add origin git@github.com:inner-light-studio/site.git

# Push both branches
git push -u origin main
git push -u origin develop