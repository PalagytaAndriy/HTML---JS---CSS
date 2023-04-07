class Kryg {


    radius(r) {
        this.radius = r;
    }
    get diametr() {
        return this.radius ** 2;
    }

    CircleArea() {
        return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
    }

    CircleWidth() {
        return Math.floor(2 * Math.PI * this.radius * 100) / 100;
    }

}

var kryg = new Kryg();
kryg.radius = 6;

document.write("Радіус = " + kryg.radius );
document.write("<br> Діаметр = " + kryg.diametr);
document.write("<br> Площа круга = " + kryg.CircleArea());
document.write("<br> Довжина круга = " + kryg.CircleWidth());