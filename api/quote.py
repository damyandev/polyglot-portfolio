from http.server import BaseHTTPRequestHandler
import json
import requests

API_URL = "https://api.quotable.io/random"

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            response = requests.get(API_URL)
            
            response.raise_for_status()
            
            data = response.json()
            
            formatted_quote = {
                "text": data.get("content", "Could not find quote content."),
                "author": data.get("author", "Unknown Author")
            }

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(formatted_quote).encode('utf-8'))

        except requests.exceptions.RequestException as e:
            error_message = {"error": f"Failed to fetch quote from external API: {str(e)}"}
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(error_message).encode('utf-8'))
        
        return