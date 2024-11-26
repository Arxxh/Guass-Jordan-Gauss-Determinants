from flask import Flask, request, jsonify

app = Flask(__name__)

# Ruta para la página de inicio o el dashboard
@app.route('/')
def home():
    return "Backend funcionando correctamente. Conéctalo al frontend."

# Ruta para resolver matrices con Gauss
@app.route('/solve/gauss', methods=['POST'])
def solve_gauss():
    data = request.json  # Recibir datos del frontend
    # Implementar lógica para resolver matrices con el método de Gauss
    matriz = data.get('matriz')
    if not matriz:
        return jsonify({"error": "No se envió una matriz válida."}), 400

    # Aquí iría la lógica para resolver el sistema de ecuaciones
    solucion = "Aquí irá la solución del sistema usando Gauss."  # Reemplazar
    return jsonify({"solucion": solucion})

# Ruta para resolver matrices con Gauss-Jordan
@app.route('/solve/gauss-jordan', methods=['POST'])
def solve_gauss_jordan():
    data = request.json
    matriz = data.get('matriz')
    if not matriz:
        return jsonify({"error": "No se envió una matriz válida."}), 400

    # Implementar lógica para Gauss-Jordan
    solucion = "Aquí irá la solución del sistema usando Gauss-Jordan."  # Reemplazar
    return jsonify({"solucion": solucion})

# Ruta para calcular determinantes
@app.route('/solve/determinant', methods=['POST'])
def solve_determinant():
    data = request.json
    matriz = data.get('matriz')
    if not matriz:
        return jsonify({"error": "No se envió una matriz válida."}), 400

    # Implementar cálculo de determinante
    determinante = "Aquí irá el cálculo del determinante."  # Reemplazar
    return jsonify({"determinante": determinante})

# Arrancar el servidor
if __name__ == '__main__':
    app.run(debug=True)

