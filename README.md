# Simple Node Express App

This is a simple Express.js application configured for deployment to Azure App Service with Node.js 20.

## Local Development

```bash
# Install dependencies
npm install

# Run the app in development mode
npm run dev

# Run the app in production mode
npm start
```

The application will run on http://localhost:3000 by default.

## Azure App Service Deployment

This application is configured for Azure App Service with Node.js 20. The `web.config` file contains the necessary IIS configuration for running the app on Azure.

### Deployment methods:

1. **Azure CLI:**

   ```bash
   # Login to Azure
   az login

   # Create a resource group (if needed)
   az group create --name myResourceGroup --location "West Europe"

   # Create an App Service plan
   az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1 --is-linux

   # Create the web app
   az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name myNodeApp --runtime "NODE|20-lts"

   # Deploy the code (from the project directory)
   az webapp deployment source config-local-git --name myNodeApp --resource-group myResourceGroup
   git remote add azure <url_from_previous_command>
   git push azure main
   ```

2. **VS Code Azure Extension:**

   - Install the Azure App Service extension
   - Sign in to Azure
   - Click the deploy button and follow the prompts

3. **GitHub Actions:**
   - Set up a GitHub repository for your code
   - Create a workflow file in `.github/workflows/`
   - Configure the Azure deployment action

## Project Structure

```
├── app.js                # Main application file
├── bin/
│   └── www               # Application entry point
├── package.json          # Project dependencies and scripts
├── public/               # Static files
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
├── routes/               # Route definitions
│   ├── index.js
│   └── users.js
├── views/                # Pug view templates
│   ├── error.pug
│   ├── index.pug
│   └── layout.pug
└── web.config            # IIS configuration for Azure App Service
```

## Environment Variables

- `PORT`: The port the server will listen on (default: 3000)
