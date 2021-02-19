class Question
{
    constructor()
    {
        this.title = createElement('h1');
        this.question = createElement('h2');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
        this.input = createInput("ANSWER NUMBER");
    }
    display()
    {
        this.title.html("My Quiz Game");
        this.title.position(150,0);

        this.question.html("Which animal dies after giving birth to baby ?");
        this.question.position(150,80);
        this.option1.html("1 : Camel");
        this.option1.position(150,110);
        this.option2.html("2 : Kangaroo rat");
        this.option2.position(150,140);
        this.option3.html("3 : Scorpion");
        this.option3.position(150,170);
        this.option4.html("4 : Kangaroo");
        this.option4.position(150,200);

        this.input.position(150,250);
    }
}