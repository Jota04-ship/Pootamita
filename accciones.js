// Estado base
class TamagotchiState {
    constructor(tamagotchi) {
        this.tamagotchi = tamagotchi;
    }

    feed() {
        console.log("No se puede alimentar en este estado.");
    }

    play() {
        console.log("No se puede jugar en este estado.");
    }

    sleep() {
        console.log("No se puede dormir en este estado.");
    }
}

// Estado Feliz
class HappyState extends TamagotchiState {
    feed() {
        console.log("El Tamagotchi está feliz y no tiene hambre.");
    }

    play() {
        console.log("El Tamagotchi está jugando.");
    }

    sleep() {
        console.log("El Tamagotchi está feliz y no quiere dormir.");
    }
}

// Estado Hambriento
class HungryState extends TamagotchiState {
    feed() {
        console.log("El Tamagotchi está comiendo.");
        this.tamagotchi.setState(this.tamagotchi.happyState);
    }

    play() {
        console.log("El Tamagotchi tiene hambre y no quiere jugar.");
    }

    sleep() {
        console.log("El Tamagotchi tiene hambre y no quiere dormir.");
    }
}

// Estado Dormido
class SleepingState extends TamagotchiState {
    feed() {
        console.log("El Tamagotchi está dormido y no puede comer.");
    }

    play() {
        console.log("El Tamagotchi está dormido y no puede jugar.");
    }

    sleep() {
        console.log("El Tamagotchi ya está dormido.");
    }
}

// Clase Tamagotchi
class Tamagotchi {
    constructor() {
        this.happyState = new HappyState(this);
        this.hungryState = new HungryState(this);
        this.sleepingState = new SleepingState(this);

        this.currentState = this.happyState;
    }

    setState(state) {
        this.currentState = state;
    }

    feed() {
        this.currentState.feed();
    }

    play() {
        this.currentState.play();
    }

    sleep() {
        this.currentState.sleep();
    }
}

// Uso del Tamagotchi
const myTamagotchi = new Tamagotchi();
myTamagotchi.play(); // El Tamagotchi está jugando.
myTamagotchi.feed(); // El Tamagotchi está feliz y no tiene hambre.
myTamagotchi.setState(myTamagotchi.hungryState);
myTamagotchi.feed(); // El Tamagotchi está comiendo.
myTamagotchi.sleep(); // El Tamagotchi está feliz y no quiere dormir.
myTamagotchi.setState(myTamagotchi.sleepingState);
myTamagotchi.sleep(); // El Tamagotchi ya está dormido.
  
