from flask import Flask
from endpoints.gauss import gauss_bp
from endpoints.gauss_jordan import gauss_jordan_bp
from endpoints.determinant import determinant_bp

app = Flask(__name__)

# Registrar Blueprints
app.register_blueprint(gauss_bp, url_prefix='/api')
app.register_blueprint(gauss_jordan_bp, url_prefix='/api')
app.register_blueprint(determinant_bp, url_prefix='/api')

@app.route('/')
def home():
    return "Backend de Step-By-Step funcionando correctamente."

if __name__ == '__main__':
    app.run(debug=True)
