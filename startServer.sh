#!/bin/bash

# Load NVM (if applicable - adjust path if needed)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Navigate to your project directory
cd /home/ec2-user/my-resume-website/my-resume-website

# Execute the npm run dev command
exec npm run dev