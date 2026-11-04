HOMEWORK 4 PWA — SETUP AND TEST

Files in this folder:
index.html, style.css, app.js, service-worker.js, manifest.webmanifest,
images/lightblue.jpg, images/lightgold.jpg, icons/icon-192.png, icons/icon-512.png

The original course-provided images lightblue.jpg and lightgold.jpg are included.
The Service Worker cache version is v2 to refresh resources from the old sample project.

HOW TO USE:
1. Upload the entire folder's contents to an HTTPS website in one directory.
2. Open the direct index.html URL in Chrome (not via file://).
3. Use the background drop-down to check both images.
4. Test a narrow mobile view in Chrome DevTools.
5. In Chrome DevTools > Application, check Manifest and Service Workers.
6. Visit the app while online at least once; wait for the Service Worker to install.
7. In DevTools > Network, select Offline; refresh and switch backgrounds.
8. Enter a name and click outside the input, then close and reopen the tab.
   Local Storage keeps the first saved name under the exact key 'name'.
   To test with a different name, delete the 'name' key in DevTools > Application
   > Local storage (or use localStorage.removeItem('name') in the console).
9. In Chrome, check the browser's Install app menu item (if supported).
10. Submit the DIRECT HTTPS URL of your index.html in Canvas.

DEVELOPMENT: Service Workers require HTTPS or localhost, not file://.
You can test locally with: python3 -m http.server 8000
Then open http://localhost:8000/ in Chrome.

This ZIP does not upload or publish the site automatically.
