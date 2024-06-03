export const API_KEY = 'AIzaSyBREBE5GeaXIaYO6CJnZkeXbUavEjpBR2I';

export const value_converter = (value: number) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    else if (value >= 1000) {
        return Math.floor(value/1000) + "K"
    }
    else {
        return value;
    }
}
