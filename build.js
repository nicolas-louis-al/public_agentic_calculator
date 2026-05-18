const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file) => {
            const curPath = path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(directoryPath);
    }
}

function copyFolderRecursive(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((file) => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        if (fs.lstatSync(srcPath).isDirectory()) {
            copyFolderRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
}

const buildDir = path.join(__dirname, 'build');
const dataDir = path.join(__dirname, 'data');

console.log('Starting cross-platform build...');

try {
    // 1. Clean existing build folder
    if (fs.existsSync(buildDir)) {
        console.log('Cleaning existing build directory...');
        deleteFolderRecursive(buildDir);
    }

    // 2. Create build folder
    console.log('Creating build directory...');
    fs.mkdirSync(buildDir, { recursive: true });

    // 3. Copy index.html
    console.log('Copying index.html...');
    fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(buildDir, 'index.html'));

    // 4. Copy data folder
    if (fs.existsSync(dataDir)) {
        console.log('Copying data directory...');
        copyFolderRecursive(dataDir, path.join(buildDir, 'data'));
    }

    console.log('Build completed successfully!');
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}
