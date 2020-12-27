import React, { Component } from 'react';
import '../App.css';
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';
import { Button, Modal } from 'react-bootstrap'

export default class Decorate extends Component {
    state = {
        show: false
    }
    handleClose = () => this.setState({show: false});

    capture = () => {
        this.setState({show: true});
        document.getElementById('capture').setAttribute("style", "display: none;");
        document.getElementById('audio').setAttribute("style", "display: none;");

        html2canvas(document.body, { allowTaint: true }).then(canvas => {
            canvas.style.width  = '750px';
            canvas.style.height = '400px';
            document.getElementById("downloader").href = canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
            document.getElementById('appendHere').appendChild(canvas)
        });

        document.getElementById('capture').setAttribute("style", "display: ;");
        document.getElementById('audio').setAttribute("style", "display: ;");

    }
    render() {
        return (
            <div>
                <div className="Home">
                <Modal
                    size="lg"
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Merry Christmas!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div id="appendHere"></div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <a id="downloader" download = "merry-christmas.png"><Button variant="primary">Save</Button></a>
                    </Modal.Footer>
                </Modal>
                    <button id="capture" onClick={() => {this.capture()}}><img height="35" src="https://www.flaticon.com/svg/static/icons/svg/638/638831.svg"></img></button>
                    <div className="background-without-trees">
                        <img height="570" src="./assets/Asset 4.png"></img>
                    </div>
                    <Draggable>
                        <div className="objects a">
                            <img width="auto" height="75" src="./assets/Asset 6.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects b">
                            <img width="auto" height="75" src="./assets/Asset 14.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects c">
                            <img width="auto" height="75" src="./assets/Asset 1.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects d">
                            <img width="auto" height="75" src="./assets/Asset 2.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects e">
                            <img width="auto" height="75" src="./assets/Asset 3.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects f">
                            <img width="auto" height="75" src="./assets/Asset 5.png"></img>
                        </div>
                    </Draggable>
                        <Draggable>
                            <div className="objects r">
                                <img width="auto" height="75" src="./assets/Asset 16.png"></img>
                            </div>
                        </Draggable>
                    <Draggable>
                        <div className="objects g">
                            <img width="auto" height="75" src="./assets/Asset 15.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects h">
                            <img width="auto" height="50" src="./assets/Asset 7.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects i">
                            <img width="auto" height="30" src="./assets/Asset 8.png"></img>
                        </div>
                    </Draggable>
                        <Draggable>
                            <div className="objects o">
                                <img width="auto" height="30" src="./assets/Asset 9.png"></img>
                            </div>
                        </Draggable>
                        <Draggable>
                            <div className="objects p">
                                <img width="auto" height="30" src="./assets/Asset 8.png"></img>
                            </div>
                        </Draggable>
                        <Draggable>
                            <div className="objects q">
                                <img width="auto" height="30" src="./assets/Asset 9.png"></img>
                            </div>
                        </Draggable>
                    <Draggable>
                        <div className="objects k">
                            <img width="auto" height="50" src="./assets/Asset 10.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects l">
                            <img width="auto" height="50" src="./assets/Asset 11.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects m">
                            <img width="auto" height="75" src="./assets/Asset 12.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects n">
                            <img width="auto" height="30" src="./assets/Asset 8.png"></img>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="objects s">
                            <img width="auto" height="75" src="./assets/Bells.png"></img>
                        </div>
                    </Draggable>
                </div>
            </div>
        )
    }
}