exports.getHelloWorld = (req, res) => {
    res.send('Hello World');
};

exports.postResponse = (req, res) => {
    res.send('I am post body');
};