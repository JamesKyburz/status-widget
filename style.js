module.exports = `
.status-widget {
  position: fixed;
  text-align: center;
  top: 0;
  padding: 10px;
  left: 0;
  height: 30px;
  width: 100%;
  opacity: 0.85;
  border: 1px #ddd solid;
  color: rgb(255, 255, 255);
  z-index: 9999999;
  font-size: 20px;
  display: none;
}

.status-widget.success {
  display: block;
  background: rgb(149, 197, 149);
}

.status-widget.error {
  display: block;
  background: rgb(219, 146, 152);
}

body[data-standalone] .status-widget {
  padding: 17px 0 5px 5px;
}
`
