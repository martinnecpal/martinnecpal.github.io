#!/usr/bin/env python3
"""
Simple HTTP server for development
Run this to test the modular presentation with separate slide files.

Usage: python3 serve.py
Then open http://localhost:8000 in your browser
"""

import http.server
import socketserver
import os

PORT = 8000

# Change to the script's directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"✓ Server running at http://localhost:{PORT}")
    print(f"  Open http://localhost:{PORT}/index.html in your browser")
    print(f"  Press Ctrl+C to stop")
    httpd.serve_forever()
