class Form{
    constructor(){
       this.input = createInput("Name");
       this.reset = createButton('Reset');
    }
    hide() {
        this.input.hide();
    }
    display() {
        this.input.position(575,240);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}