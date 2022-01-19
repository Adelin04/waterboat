from datetime import datetime
from flask import Flask, request, jsonify, json
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy.pool import QueuePool
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

now = datetime.now()
app = Flask(__name__)
CORS(app=app, suport_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://beec09cd5fe9bf:42d53147@eu-cdbr-west-03.cleardb.net/heroku_f9ba8768f14af9f'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app, engine_options={
                "pool_size": 10, "poolclass": QueuePool, "pool_pre_ping": True})
app.config["SECRET_KEY"] = "waterboatsuperkey"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

manager = Manager(app)
migrate = Migrate(app, db)
manager.add_command('db', MigrateCommand)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_name = db.Column(db.String(200), nullable=False)
    user_email = db.Column(db.String(200), unique=True, nullable=False)
    user_phone = db.Column(db.String(20), unique=True, nullable=False)
    booking_date = db.Column(db.String(10), nullable=False)
    booking_time = db.Column(db.String(10), nullable=False)
    date_registration = db.Column(db.DateTime, default=now, nullable=False)

    def __init__(
        self,
        user_name,
        user_email,
        user_phone,
        booking_date,
        booking_time,
    ):
        self.user_name = user_name
        self.user_email = user_email
        self.user_phone = user_phone
        self.booking_date = booking_date
        self.booking_time = booking_time

    def __repr__(self):
        return json.dumps(
            {
                "user_ID": self.id,
                "userName": self.user_name,
                "userEmail": self.user_email,
                "userPhone": self.user_phone,
                "bookingDate": self.booking_date,
                "bookingTime": self.booking_time,
                "dateRegistration": self.date_registration,
            }
        )


@app.route("/saveBooking", methods=["POST"])
def saveUser():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        date = request.form["date_from"]
        time = request.form["date_to"]

        newUser = Users(
            user_name=name,
            user_email=email,
            user_phone=phone,
            booking_date=date,
            booking_time=time,
        )
        db.session.add(newUser)
        db.session.commit()
    return {"succes": True}


@app.route('/getBooking', methods=['GET'])
def get_booking():
    users = Users.query.all()
    result = []

    if users:
        for user in users:
            user_data = {}
            user_data['ID'] = user.id
            user_data['user_name'] = user.user_name
            user_data['user_email'] = user.user_email
            user_data['user_phone'] = user.user_phone
            user_data['booking_date'] = user.booking_date
            user_data['booking_time'] = user.booking_time
            user_data['dateRegistration'] = user.date_registration
            result.append(user_data)
    return jsonify({'Users': result, 'succes': True})


@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers",
                         "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods",
                         "GET,PUT,POST,DELETE,OPTIONS")
    return response


if __name__ == "__main__":
    app.run(debug=True)
    # manager.run()
    # python app.py db init
    # python app.py db migrate
    # python app.py db upgrade
    # Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
