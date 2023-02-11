from flask import Flask

app = Flask(__name__)

@app.route('/hello')
def get_message():
    return {"message": "hello world!"}


if __name__ == '__main__':
    app.run(port=5000)
