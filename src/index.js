const messages = ["Manuel", "Joel", "Yazmin", "Nancy", "Reynaldo", "Antonio", "Gerardo", "karina", "Vanessa"]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };