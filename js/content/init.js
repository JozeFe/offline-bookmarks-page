if (!init) {
  function init() {
    var col1 = [];
    col1.push(topic("Favorites", "star"));
    col1.push(link("Calendar", "https://calendar.google.com/calendar/b/0/render", "calendar"));
    col1.push(link("Mail google 1", "https://mail.google.com/", "envelope"));
    col1.push(link("Mail google 2", "https://mail.google.com/mail/u/1/", "envelope"));
    col1.push(link("Drive", "https://drive.google.com/drive/u/0/folders/0B5Qipfvku5pnWjVMdFN1NWh6akU", "cloud"));
    col1.push(link("Messenger", "https://www.facebook.com/messages/", "comment"));
    col1.push(link("Linkedin", "https://www.linkedin.com/"));
    col1.push(link("Twitter", "https://twitter.com/"));
    col1.push(link("Instagram", "https://www.instagram.com/", "camera"));

    var col2 = [];
    col2.push(topic("Chess"));
    col2.push(link("Chess.com", "https://www.chess.com/livechess/myhome", "pawn"));
    col2.push(link("Lichess.org", "https://sk.lichess.org/"));

    var col3 = [];

    var col4 = [];
    col4.push(topic("Docs"));
    col4.push(link("Kafka", "https://kafka.apache.org/0110/documentation.html"));
    col4.push(link("Confluent", "https://docs.confluent.io/current/"));
    col4.push(link("Docker", "https://docs.docker.com/engine/reference/builder/#usage"));
    col4.push(link("Spring", "https://spring.io/docs/reference", "leaf"));
    col4.push(link("Ramda", "https://ramdajs.com/docs/", "random"));
    col4.push(link("Ramda-extension", "https://ramda-extension.firebaseapp.com/docs/"));
    col4.push(link("React Union Doc", "https://react-union.org/"));

    var col5 = [];
    col5.push(topic("Programming"));
    col5.push(link("StackOverflow", "https://stackoverflow.com/"));
    col5.push(link("Tutorialspoint", "https://www.tutorialspoint.com/spring/spring_java_based_configuration.htm"));
    col5.push(link("W3schools", "http://www.w3schools.com/css/default.asp"));
    col5.push(link("Bootstrap comp", "http://getbootstrap.com/components/", "bold"));
    col5.push(link("Design patterns", "https://sourcemaking.com/design_patterns"));
    col5.push(link("GoF patterns C#", "http://www.blackwasp.co.uk/gofpatterns.aspx"));
    col5.push(link("Android Dev", "https://developer.android.com/training/index.html"));
    col5.push(link("Webpack Generator", "https://generatewebpackconfig.netlify.com/"));

    var col6 = [];

    var col7 = [];
    col7.push(topic("Math"));
    col7.push(link("Wolframalpha"			,"http://www.wolframalpha.com/"));
    col7.push(link("Derivative-calc"		,"http://www.derivative-calculator.net/"));
    col7.push(link("Integral-calc"			,"http://www.integral-calculator.com/"));

    $("#content").append(createPart(1, col1));
    $("#content").append(createPart(2, col2));
    $("#content").append(createPart(3, col3));
    $("#content").append(createPart(4, col4));
    $("#content").append(createPart(5, col5));
    $("#content").append(createPart(6, col6));
    $("#content").append(createPart(7, col7));
    $("#content").append(createPart(8, ));
    $("#content").append(createPart(9, ));
    $("#content").append(createPart(10, ));
    $("#content").append(createPart(11, ));
    $("#content").append(createPart(12, ));

    show(1, [1, 2, 3, 4, 5, 6]);
  };
}
