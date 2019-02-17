from flask import Flask, render_template, url_for, flash, redirect
from forms import RegistrationFrom, LoginFrom
app = Flask(__name__)

app.config['SECRET_KEY'] = '0cdea408de27ca946783888b36ca381a'

posts = [
    {
        'author': 'Corey Schafer',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'April 20, 2018'
    },
    {
        'author': 'Jane Doe',
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': 'April 21, 2018'
    }
]


@app.route('/')
def home():
    return render_template('home.html', posts=posts, title="Ganesh")


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationFrom()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html', title="Register", form=form)


@app.route('/login',  methods=['GET', 'POST'])
def login():
    form = LoginFrom()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check your email and password', 'danger')
    return render_template('login.html', title="Login", form=form)


if __name__ == '__main__':
    app.run(debug=True)
