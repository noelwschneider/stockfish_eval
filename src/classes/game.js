export class game {
    constructor() {
        this.position = {};
        this.moves = [];
        this.players = {
            white: {
                id: "",
                name: "",
                rating: 0,
            },
            black: {
                id: "",
                name: "",
                rating: 0,
            },
        }
    }
}