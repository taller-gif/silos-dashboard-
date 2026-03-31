function actualizar(topic, valor) {

    let id = "";
    let vid = "";
    let maxTon = 100;

    if (topic === "silos/esp32/reading1") { id="c1"; vid="v1"; maxTon=75; }
    if (topic === "silos/esp32/reading2") { id="c2"; vid="v2"; maxTon=45; }
    if (topic === "silos/esp32/reading3") { id="c3"; vid="v3"; maxTon=75; }
    if (topic === "silos/esp32/reading4") { id="c4"; vid="v4"; maxTon=45; }

    let porcentaje = (valor / maxTon) * 360;

    // 🎨 COLORES TIPO INDUSTRIAL
    let color = "#00f0ff";

    if (valor < maxTon * 0.5) color = "#facc15";
    if (valor < maxTon * 0.25) color = "#ef4444";

    // 🎯 ANILLO
    document.getElementById(id).style.background =
        `conic-gradient(${color} ${porcentaje}deg, #111 ${porcentaje}deg)`;

    // 🔢 TEXTO
    document.getElementById(vid).innerText = Math.round(valor);
}