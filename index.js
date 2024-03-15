const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}`);
});

app.use("/inicio", express.static("inicio"));
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: "inicio",
  });
});

const usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"];

app.get("/abracadabra/usuarios", (req, res) => {
  res.json(usuarios);
});

app.use("/abracadabra/juego/:usuario", (req, res, next) => {
  if (usuarios.includes(req.params.usuario)) {
    next();
  } else {
    res.sendFile("who.jpeg", {
      root: path.join(__dirname, "assets"),
      dotfiles: "deny",
      headers: {
        "x-timestamp": Date.now(),
        "x-sent": true,
      },
    });
  }
});

app.get("/abracadabra/juego/:usuario", (req, res) => {
  res.sendFile("index.html", { root: "assets" });
});
const numeroAleatorio = Math.floor(Math.random() * 4) + 1;
app.get("/abracadabra/conejo/:n", (req, res) => {
  const numeroParametro = +req.params.n;
  //console.log(typeof numeroParametro);
  if (numeroAleatorio == numeroParametro) {
    res.sendFile("conejito.jpg", {
      root: path.join(__dirname, "assets"),
      dotfiles: "deny",
      headers: {
        "x-timestamp": Date.now(),
        "x-sent": true,
      },
    });
  } else {
    res.sendFile("voldemort.jpg", {
      root: path.join(__dirname, "assets"),
      dotfiles: "deny",
      headers: {
        "x-timestamp": Date.now(),
        "x-sent": true,
      },
    });
  }
});

app.use(express.static("error404"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "error404", "index.html"));
});
