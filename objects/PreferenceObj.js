class PreferenceObj {
    constructor(shapesList, textureList, timerUsed, timerDuration) {
        /*  Array shapesList
            Array textureList
            Bool timerUsed
            Time timerDuration*/
        this.shapes = shapesList;
        this.texture = textureList;
        this.timerUsed = timerUsed;
        if (timerUsed){
            this.timerDuration = timerDuration;
        }
    }
}