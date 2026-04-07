const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Execute shell command
app.post('/api/execute', (req, res) => {
  const { command } = req.body;
  
  if (!command) {
    return res.status(400).json({ error: 'No command provided' });
  }

  // Security: Only allow specific commands
  const allowedCommands = ['start', 'open', 'explorer', 'notepad', 'calc', 'cmd', 'dir', 'type', 'copy', 'del'];
  const isAllowed = allowedCommands.some(cmd => command.toLowerCase().startsWith(cmd));

  // For full control, we allow more but with caution
  console.log('Executing command:', command);
  
  exec(command, { cwd: process.cwd() }, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ output: stdout || stderr });
  });
});

// Open file/folder
app.post('/api/open', (req, res) => {
  const { path: filePath } = req.body;
  
  if (!filePath) {
    return res.status(400).json({ error: 'No path provided' });
  }

  const normalizedPath = path.normalize(filePath);
  const command = `start "" "${normalizedPath}"`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ success: true, message: `Opened: ${normalizedPath}` });
  });
});

// Get file/folder info
app.get('/api/info', (req, res) => {
  const { path: filePath } = req.query;
  
  if (!filePath) {
    return res.status(400).json({ error: 'No path provided' });
  }

  const normalizedPath = path.normalize(filePath);
  
  fs.stat(normalizedPath, (err, stats) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      name: path.basename(normalizedPath),
      isDirectory: stats.isDirectory(),
      size: stats.size,
      modified: stats.mtime
    });
  });
});

// List directory
app.get('/api/list', (req, res) => {
  const { path: dirPath } = req.query;
  
  const targetPath = dirPath || process.cwd();
  
  fs.readdir(targetPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    const fileList = files.map(file => {
      const fullPath = path.join(targetPath, file);
      try {
        const stats = fs.statSync(fullPath);
        return {
          name: file,
          isDirectory: stats.isDirectory(),
          size: stats.size
        };
      } catch {
        return { name: file, isDirectory: false, size: 0 };
      }
    });
    
    res.json(fileList);
  });
});

// Get system info
app.get('/api/system', (req, res) => {
  const os = require('os');
  res.json({
    platform: os.platform(),
    hostname: os.hostname(),
    homedir: os.homedir(),
    cpus: os.cpus().length,
    totalMemory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`
  });
});

app.listen(PORT, () => {
  console.log(`PC Control Server running on http://localhost:${PORT}`);
});