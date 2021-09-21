import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './App.css';
import BgPage1 from "./images/bg_page1.png"
import BgPage2 from "./images/bg_page2.png"
import Logo from "./images/logo.png"
import Next from "./images/next.png"
import ImgPage3a from "./images/page3a.png"
import ImgPage3b from "./images/page3b.png"
import ImgPage3c from "./images/page3c.png"
import BgPage4 from "./images/bg_page4.png"
import BgLab from "./images/lab.png"
import WaterBath from "./images/waterbath.png"
import WaterBathTube from "./images/waterbathtube.png"
import CentriFuge from "./images/centrifuge.png"
import Bottles from "./images/bottles.png"
import Pipet from "./images/pipet.png"
import PipetTip from "./images/pipettip.png"
import PipetSingle from "./images/pipetsingle.png"
import PipetFilled from "./images/pipetfilled.png"
import PipetBox from "./images/pipetbox.png"
import Tubes from "./images/tubes.png"
import Stick from "./images/stick.png"
import Bud from "./images/bud.png"
import Tubesingle from "./images/tubesingle.png"
import Tubeshake2 from "./images/tubeclosedshake2.png"
import Tubeshake3 from "./images/tubeclosedshake3.png"
import Tubesfilled from "./images/tubefilled.png"
import Tubesfilledempty from "./images/tubefilledempty.png"
import Tubesclosed from "./images/tubeclosed.png"
import Tubescloseddebris from "./images/tubecloseddebris.png"
import Tubesopendebris from "./images/tubeopendebris.png"
import Tubesemptydebris from "./images/tubeemptydebris.png"
import Tubesclosedempty from "./images/tubeclosedempty.png"
import Tubesclosedna from "./images/tubeclosedna.png"
import Swab from "./images/swab.png"
import Gunting from "./images/gunting.png"
import LysisBottle from "./images/lysisBottle.png"
import LysisCap from "./images/lysisCap.png"
import SaltBottle from "./images/saltBottle.png"
import SaltCap from "./images/saltCap.png"
import AlcoholBottle from "./images/alcoholBottle.png"
import AlcoholCap from "./images/alcoholCap.png"
import SwabCells from "./images/swabcells.png"
import Person1 from "./images/person1.png"
import Person2 from "./images/person2.png"
import Person3 from "./images/person3.png"
import Debris1 from "./images/debris1.png"
import Debris2 from "./images/debris2.png"
import CentrifugeClosed from "./images/CentrifugeClosed.png"
import CentrifugeClosed2 from "./images/CentrifugeClosed2.png"
import CentrifugeOpen from "./images/CentrifugeOpen.png"
import CentrifugeOpen2 from "./images/CentrifugeOpen2.png"
import CentrifugeOpen3 from "./images/CentrifugeOpen3.png"
import Dna1 from "./images/dna1.png"
import Dna2 from "./images/dna2.png"
import Cell from "./images/cell.png"
import CellZoom from "./images/cellzoom.png"
import CellCore from "./images/cellcore.png"
import CellCoreOpen from "./images/cellcoreopen.png"
import CellCoreChromo from "./images/cellcorechromo.png"
import CellCoreDna from "./images/cellcoredna.png"
import CellCoreDnaBroken from "./images/cellcorednabroken.png"
import CellCoreDnaString from "./images/cellcorednastring.png"
import CellZoomBroken from "./images/cellzoombroken.png"
import Arrow from "./images/arrow.png"
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'

var count = 0
export default function App() {
  return (
    <Router>
      <div className="container" style={{ width: "100vw", height: "15vh", padding: "1rem 3rem", backgroundColor: "#222" }}>
        <img src={Logo} style={{
          width: '7rem', height: "auto"
        }}></img>
        <p style={{ marginLeft: "1rem", color: "#fff", display: "inline-block", fontWeight: "bold", fontSize: "24pt", textAlign: "left", lineHeight: "1.5rem" }}>
          UNIVERSITAS NEGERI MEDAN
          <br />
          <sub>&copy;2021</sub></p>
      </div>
      <div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3a">
            <Page3a />
          </Route>
          <Route path="/page3b">
            <Page3b />
          </Route>
          <Route path="/page3c">
            <Page3c />
          </Route>
          <Route path="/page4">
            <Page4 />
          </Route>
          <Route path="/page5">
            <Page5 />
          </Route>
          <Route path="/page6">
            <Page6 />
          </Route>
          <Route path="/page7">
            <Page7 />
          </Route>
          <Route path="/page8">
            <Page8 />
          </Route>
          <Route path="/page9">
            <Page9 />
          </Route>
          <Route path="/page10">
            <Page10 />
          </Route>
          <Route path="/page11">
            <Page11 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div className="container global-container" id="content">
      <div className="world-wrapper"
        style={{
          backgroundImage: 'url(' + BgPage1 + ')', backgroundSize: 'cover',
          padding: "2rem", color: "white"
        }}>
        <div className="row">
          <div className="col-12" style={{ paddingTop: "8rem" }}>
            <p style={{
              fontWeight: "bold", fontSize: "24pt", textAlign: "center", lineHeight: "4rem",
              width: "100%", backgroundColor: "rgba(0,0,0,0.56)"
            }}>
              SELAMAT DATANG DI <br />
              ONLINE SIMULATION BIOLOGY LABORATORY (OSIBYL)
              <br />ISOLASI DNA SEL MANUSIA
              <br /><sub style={{ fontWeight: "initial", fontSize: "10pt" }}>Klik Next untuk melanjutkan.</sub></p>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "1rem", right: "4rem" }}>
          <Link to="/page2"><img src={Next} style={{
            width: '5rem', height: "auto"
          }}></img></Link>
        </div>
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div className="container global-container" id="content">
      <div className="world-wrapper"
        style={{
          backgroundImage: 'url(' + BgPage2 + ')', backgroundSize: 'cover',
          padding: "2rem", color: "white"
        }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-4" style={{ backgroundColor: "rgba(0,0,0,0.53)", height: "100%" }}>
            <p style={{
              paddingTop: "6rem",
              color: "white", fontWeight: "bold", fontSize: "18pt",
              lineHeight: "3rem"
            }}>Dalam praktikum ini, kita akan menggunakan DNA manusia sebagai subjek.
              <br />Mengapa kita perlu menganalisis DNA manusia?”</p>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "1rem", right: "4rem" }}>
          <Link to="/page3a"><img src={Next} style={{
            width: '5rem', height: "auto"
          }}></img></Link>
        </div>
      </div>
    </div>
  );
}

function Page3a() {
  const history = useHistory();
  setTimeout(function () {
    history.push("/page3b")
  }, 3000);
  return (
    <div className="container global-container" id="content">
      <div className="world-wrapper"
        style={{
          backgroundImage: 'url(' + ImgPage3a + ')', backgroundSize: 'cover',
          padding: "2rem", color: "white"
        }}>

        <div className="row" style={{ height: "100%" }}>
          <div className="col-4" style={{ backgroundColor: "rgba(0,0,0,0.53)", height: "100%" }}>
            <p style={{
              paddingTop: "6rem",
              color: "white", fontWeight: "bold", fontSize: "18pt",
              lineHeight: "3rem"
            }}>Peneliti melakukan isolasi DNA untuk beberapa tujuan, seperti:</p>
            <ul style={{
              paddingTop: "6rem",
              color: "white", fontWeight: "bold", fontSize: "18pt",
              lineHeight: "3rem"
            }}>
              <li>Analisis Bukti Forensik</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
function Page3b() {
  const history = useHistory();
  setTimeout(function () {
    history.push("/page3c")
  }, 3000);
  return (
    <div className="container global-container" id="content">
      <div className="world-wrapper"
        style={{
          backgroundImage: 'url(' + ImgPage3b + ')', backgroundSize: 'cover',
          padding: "2rem", color: "white"
        }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-4" style={{ backgroundColor: "rgba(0,0,0,0.53)", height: "100%" }}>
            <p style={{
              paddingTop: "6rem",
              color: "white", fontWeight: "bold", fontSize: "18pt",
              lineHeight: "3rem"
            }}>Peneliti melakukan isolasi DNA untuk beberapa tujuan, seperti:</p>
            <ul style={{
              paddingTop: "6rem",
              color: "white", fontWeight: "bold", fontSize: "18pt",
              lineHeight: "3rem"
            }}>
              <li>Analisis Bukti Forensik</li>
              <li>Identifikasi Jenazah</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page3c() {
  return (
    <div className="container global-container" id="content">
      <div className="world-wrapper"
        style={{
          backgroundImage: 'url(' + ImgPage3c + ')', backgroundSize: 'cover',
          padding: "2rem", color: "white"
        }}>
        <div style={{ position: "absolute", bottom: "1rem", right: "4rem" }}>
          <Link to="/page4"><img src={Next} style={{
            width: '5rem', height: "auto"
          }}></img></Link>
        </div>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-4" style={{ backgroundColor: "rgba(0,0,0,0.53)", height: "100%" }}>
            <p style={{
              paddingTop: "6rem",
              color: "white", fontWeight: "bold", fontSize: "18pt",
              lineHeight: "3rem"
            }}>Peneliti melakukan isolasi DNA untuk beberapa tujuan, seperti:</p>
            <ul style={{
              paddingTop: "6rem",
              color: "white", fontWeight: "bold", fontSize: "18pt",
              lineHeight: "3rem"
            }}>
              <li>Analisis Bukti Forensik</li>
              <li>Identifikasi Jenazah</li>
              <li>Identifikasi Genetik</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page4() {
  return (
    <div className="container global-container" id="content">
      <div className="world-wrapper"
        style={{
          backgroundImage: 'url(' + BgPage4 + ')', backgroundSize: 'cover',
          padding: "2rem", color: "white"
        }}>
        <div style={{ position: "absolute", bottom: "1rem", right: "4rem" }}>
          <Link to="/page5"><img src={Next} style={{
            width: '5rem', height: "auto"
          }}></img></Link>
        </div>
      </div>
    </div>
  );
}


function Page5() {
  return (
    <div className="container global-container" id="content">
      <div className="world-wrapper zoom-in">
        <div className="world-wrapper slide-left"
          style={{
            backgroundImage: 'url(' + BgLab + ')', backgroundSize: 'cover',
            padding: "2rem", color: "white"
          }}>
          <div style={{ position: "absolute", bottom: "1rem", right: "4rem" }}>
            <Link to="/page6"><img src={Next} style={{
              width: '5rem', height: "auto"
            }}></img></Link>
          </div>
          <div style={{
            display: "block", width: "84rem", height: "auto", position: "absolute", bottom: "14.5rem", left: "14rem"
          }}>
            <img src={WaterBath} style={{
              width: '11rem', height: "auto"
            }}></img>
            <p className="text-label show-label1" style={{ bottom: "-1.5rem", left: "-1.5rem" }}>Warm Water Bath</p>
            <img src={CentriFuge} style={{
              width: '8rem', height: "auto", marginLeft: "1rem", marginBottom: "-1.5rem"
            }}></img>
            <p className="text-label show-label2" style={{ bottom: "-1.5rem", left: "11.5rem" }}>MicrocentriFuge</p>
            <img src={Bottles} style={{
              width: '13rem', height: "auto", marginLeft: "1rem", marginBottom: "-3.5rem"
            }}></img>
            <p className="text-label show-label3" style={{ bottom: "12rem", left: "16.75rem", transform: "rotate(60deg)" }}>Lysis Solution</p>
            <p className="text-label show-label4" style={{ bottom: "16rem", left: "14.75rem", transform: "rotate(60deg)" }}>Concentrated Salt Solution</p>
            <p className="text-label show-label5" style={{ bottom: "11rem", left: "25.75rem", transform: "rotate(60deg)" }}>Ethanol</p>
            <p className="text-label show-label6" style={{ bottom: "14rem", left: "25.25rem", transform: "rotate(60deg)" }}>Isophropyl Alcohol </p>
            <img src={Tubes} style={{
              width: "5rem", height: "auto", marginLeft: "1rem", marginBottom: "-5.5rem"
            }}></img>
            <p className="text-label show-label7" style={{ bottom: "6.5rem", left: "34.75rem" }}>Sample Tube</p>
            <p className="text-label show-label8" style={{ bottom: "-1.5rem", left: "34.75rem" }}>Buccal Swab</p>
            <img src={Pipet} style={{
              width: '13rem', height: "auto", marginLeft: "1rem", marginBottom: "-1.5rem"
            }}></img>
            <p className="text-label show-label9" style={{ bottom: "-1.5rem", left: "45.75rem" }}>Micropipettor</p>
            <img src={Swab} style={{
              position: "absolute",
              width: '6rem', height: "auto", left: "35rem", bottom: "0.5rem"
            }}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
function TestFunction() {
  $("#zoom-container").css({
    // transform: "scale(1.02) translateY(0.55rem) translateX(0rem)"
    transition: "transform 2s"
  })
  $("#zoom-container").removeClass("extra-zoom-in")
}

function isOverlap(idOne: any, idTwo: any) {
  var objOne = $(idOne),
    objTwo = $(idTwo),
    offsetOne = objOne.offset(),
    offsetTwo = objTwo.offset(),
    topOne = offsetOne!.top,
    topTwo = offsetTwo!.top,
    leftOne = offsetOne!.left,
    leftTwo = offsetTwo!.left,
    widthOne = 0.5 * objOne.height()!,
    widthTwo = objTwo.width(),
    heightOne = 0.5 * objOne.width()!,
    heightTwo = objTwo.height();
  var leftTop = leftTwo > leftOne && leftTwo < leftOne + widthOne! && topTwo > topOne && topTwo < topOne + heightOne!
  var rightTop = leftTwo + widthTwo! > leftOne && leftTwo + widthTwo! < leftOne + widthOne! && topTwo > topOne && topTwo < topOne + heightOne!
  var leftBottom = leftTwo > leftOne && leftTwo < leftOne + widthOne! && topTwo + heightTwo! > topOne && topTwo + heightTwo! < topOne + heightOne!
  var rightBottom = leftTwo + widthTwo! > leftOne && leftTwo + widthTwo! < leftOne + widthOne! && topTwo + heightTwo! > topOne && topTwo + heightTwo! < topOne + heightOne!;
  return leftTop || rightTop || leftBottom || rightBottom;
}
function Page6() {
  useEffect(() => {
    var startTime: any, endTime: any;
    function start() {
      startTime = new Date();
    };

    function end() {
      endTime = new Date();
      var timeDiff: number = endTime - startTime; //in ms
      // strip the ms
      timeDiff /= 1000;

      // get seconds 
      var seconds = Math.round(timeDiff);
      console.log(seconds + " seconds");
      return seconds
    }
    $("#swab").draggable({
      cursor: 'move',
      cursorAt: { bottom: 100, right: 1.6 },
      start: function () {
        console.log(Person3)
        $("#buccal-label").css({ opacity: 0 });
        $("#swab-hitbox").css({ display: 'block' });
        start();
      },
      drag: function () {
        console.log(isOverlap("#swab-hitbox", "#swab"))
        if (end() >= 2 && isOverlap("#swab-hitbox", "#swab")) {
          $('#swab').draggable("destroy");
          $("#swab-hitbox").css({ display: 'none' });
          $("#swab").addClass("pullback-swab");
          setTimeout(() => {
            $("#zoom-container").css({
              transition: "all 2.5s ease",
              // left:"226rem",
              // top:"-66rem",
              transform: "scale(2.5)"
            })
            setTimeout(() => {
              $("#zoom-container").css({
                transition: "all 1.5s ease",
                transform: "scale(9.5) translateY(13.5rem) translateX(-13rem)"
              })
            }, 2500)
            $("#Person3").attr({ src: Person2 });
            setTimeout(function () {
              $("#Person3").attr({ src: Person1 });
              setTimeout(function () {
                $("#perhatikan").css({
                  opacity: 1
                })
                $("#nextButton").css({
                  opacity: 1
                })
              }, 5000)
            }, 1500)
          }, 5500)
        }
      },
      stop: function () {

      }
    });
    console.log($("#swb"))
  }, [])
  return (
    <div className="container global-container" id="content">
      <div id="zoom-container" className="world-wrapper zoom-center" style={{
        transformOrigin: "left bottom"
      }}>
        <div className="world-wrapper"
          style={{
            backgroundImage: 'url(' + BgLab + ')', backgroundSize: '155%', backgroundPosition: "-30rem -8rem",
            padding: "2rem", color: "white"
          }}>
          <div style={{
            display: "block", width: "84rem", height: "auto", position: "absolute", bottom: "14.5rem", left: "14rem"
          }}>
            <div style={{ position: "absolute", top: "-0.55rem", left: "6.65rem", zIndex: 2000 }}>
              <Link to="/page7"><img src={Next} id="nextButton" style={{
                width: '0.85rem', height: "auto", opacity: 0
              }}></img></Link>
            </div>
            <div id="swab-hitbox" style={{
              position: "absolute", left: "24rem", bottom: "-9rem",
              zIndex: 1,
              height: "16rem",
              display: "none",
              width: '16rem', backgroundColor: "transparent"
            }}></div>
            <p className="text-label" style={{ width: "10rem", bottom: "14.5rem", left: "3.75rem", opacity: 1 }}>
              Peneliti mengambil sampel dengan cara menggosok pipi bagian dalam menggunakan buccal swab</p>

            <img src={Tubes} style={{
              position: "absolute", left: "-6rem", top: "0rem",
              width: '12rem', height: "auto", opacity: 1
            }}></img>

            <img id="swab" src={SwabCells} className="swab-first" style={{
              position: "absolute",
              zIndex: 1000,
              width: '1.425rem', height: "auto"
            }}></img>
            <p id="perhatikan" className="text-label" style={{ height: "fit-content", top: "-.73rem", left: "1.5rem", opacity: 0, padding: "1.3pt", fontSize: "2.5pt" }}>
              Perhatikan baik-baik swab, <br></br>disitu terdapat ratusan sel pipi, <br></br> yang didalamnya terdapat inti sel.
              <br></br>Didalam inti sel ada DNA.
            </p>
            <p id="buccal-label" className="text-label" style={{ bottom: "-8.5rem", left: "14.75rem", opacity: 1 }}>Buccal Swab</p>
            <img src={Person1} className="slide-in fade-out" style={{
              position: "absolute", right: "15rem", bottom: "-15rem",
              width: '46rem', height: "auto", opacity: 1
            }}></img>
            <img src={Person2} className="fade-in fade-out-2" style={{
              position: "absolute", right: "15rem", bottom: "-15rem",
              width: '46rem', height: "auto", opacity: 0
            }}></img>
            <img id="Person3" src={Person3} className="fade-in-2" style={{
              position: "absolute", right: "15rem", bottom: "-15rem",
              width: '46rem', height: "auto", opacity: 0
            }}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
function Page7() {
  setTimeout(function () {
    $("#zoom-out-container").css({
      transition: "transform 1.2s ease-in-out"
    })
    $("#zoom-out-container").css({
      transform: "none"
    })
    $("#swab").css({
      transition: "transform 0.8s ease-in-out",
    })
    $("#tubeSingle").css({
      transition: "transform 0.8s ease-in-out"
    })
    setTimeout(function () {
      $("#swab").css({
        transform: "rotate(180deg) translateY(14rem)"
      })
      setTimeout(function () {
        $("#instruksi").css({
          opacity: 1
        })
        $("#bud").css({
          opacity: 1
        })
        $("#tubeSingle").css({
          transform: "rotate(66deg) translateY(-4rem)  translateX(-2.85rem)"
        })
        $("#swab").attr({
          src: Stick
        })
        $("#swab").css({
          left: "2.95rem",
          width: "0.35rem",
        })
        $("#arrow-gunting").css({
          opacity: 1
        })
        setTimeout(function () {
          $("#gunting").draggable({
            cursor: 'move',
            start: function () {
              $("#arrow-gunting").css({
                transition: "all 1.5s ease",
                left: "7.5rem",
                top: "-10.5rem",
                transform: "rotate(148deg)"
              })
              $("#gunting-hitbox").css({ display: 'block' });
            },
            drag: function () {
              console.log(isOverlap("#gunting", "#gunting-hitbox"))
              if (isOverlap("#gunting", "#gunting-hitbox")) {
                $('#gunting').draggable("destroy");
                $('#gunting').addClass("pullback-gunting");
                $('#swab').addClass("pullback-stick");
                $("#gunting-hitbox").css({ display: 'none' });
                // $("#gunting").addClass("pullback-gunting");
                $("#instruksi").text("kemudian tambahkan beberapa larutan lysis ke dalam tabung")
                $("#bud").css({
                  transition: "transform 0.8s ease-in-out",
                  transform: "rotate(180deg) translateY(-11rem)"
                })
                $("#arrow-gunting").css({
                  transition: "all 1.5s ease",
                  left: "23.5rem",
                  top: "-14.5rem",
                  transform: "rotate(185deg)"
                })
                setTimeout(function () {
                  $('#lysisCap').addClass("pullback-lysisCap");
                  $('#pipetSingle').addClass("pipet-position");
                  $('#lysisBottle').addClass("pullback-lysisBottle");
                  setTimeout(function () {
                    $('#pipetSingle').draggable({
                      cursor: 'move',
                      cursorAt: { left: 450, top: -120.6 },
                      start: function () {
                        $("#pipet-hitbox").css({ display: 'block' });
                        $("#arrow-gunting").css({
                          transition: "all 1.5s ease",
                          left: "32.5rem",
                          top: "-14.5rem",
                          transform: "rotate(25deg)"
                        })
                      },
                      drag: function () {
                        console.log(isOverlap("#pipetSingle", "#pipet-hitbox"))
                        if (isOverlap("#pipetSingle", "#pipet-hitbox")) {

                          $("#arrow-gunting").css({
                            transition: "all 1.5s ease",
                            left: "13.5rem",
                            top: "-5.5rem",
                            transform: "rotate(90deg)"
                          })
                          $('#pipetSingle').attr({
                            src: PipetTip
                          });
                          $("#pipet-hitbox").css({ display: 'none' });
                          $("#bottle-hitbox").css({ display: 'block' });
                        }
                        if ($("#bottle-hitbox").css("display") == "block") {
                          if (isOverlap("#pipetSingle", "#bottle-hitbox")) {
                            $("#arrow-gunting").css({
                              transition: "all 1.5s ease",
                              left: "2.5rem",
                              top: "-9.5rem",
                              transform: "rotate(90deg)"
                            })
                            $('#pipetSingle').attr({
                              src: PipetFilled
                            });
                            $("#bottle-hitbox").css({ display: 'none' });
                            $("#tube-hitbox").css({ display: 'block' });
                          }
                        }
                        if ($("#tube-hitbox").css("display") == "block") {
                          if (isOverlap("#pipetSingle", "#tube-hitbox")) {
                            $('#pipetSingle').attr({
                              src: PipetTip
                            });
                            $('#tubeSingle').attr({
                              src: Tubesfilled
                            });
                            $('#lysisBottle').removeClass("pullback-lysisBottle");
                            $('#lysisCap').removeClass("pullback-lysisCap");
                            $('#pipetSingle').draggable("destroy")
                            setTimeout(function () {
                              $('#pipetSingle').css({
                                animationName: "pullback-pipetSingle",
                                left: "-6.45rem",
                                top: "-2.75rem",
                              })
                              setTimeout(function () {
                                $("#waterBath").css({
                                  transition: "transform 1.8s ease-in-out",
                                  transform: "translateX(40rem)"
                                })
                                setTimeout(function () {
                                  // $("#zoom-out-container").css({
                                  //   transform: "scale(1.75) translateY(-10rem)"
                                  // })
                                  $("#bud").css({
                                    display: "none"
                                  })

                                  $("#instruksi").text("Masukan tube ke dalam waterbath")
                                  $("#tubeSingle").click(function () {
                                    $("#tubeSingle").attr({
                                      src: Tubesclosed
                                    })
                                    $("#tubeSingle").css({
                                      transition: "all 0.8s ease-in-out",
                                      width: "2.49rem",
                                      left: "11rem",
                                      top: "4.2rem",
                                      opacity: 0
                                    })

                                    $("#arrow-gunting").css({
                                      opacity: 0,
                                      transition: "none"
                                    })
                                    $("#tubeSingle").removeAttr("onclick");
                                    setTimeout(function () {
                                      $("#waterBath").attr({
                                        src: WaterBathTube
                                      })
                                      $("#zoom-out-container").css({
                                        transform: "scale(2.85) translateY(-11rem) translateX(11rem)"
                                      })
                                      setTimeout(function () {
                                        window.location.href = "/page8";

                                      }, 2500)
                                    }, 500)
                                  });

                                })
                              }, 1500)
                            }, 1500)
                            $("#tube-hitbox").css({ display: 'none' });

                          }
                        }
                      },
                      stop: function () {

                      }
                    })
                  }, 1500)
                }, 1500)
              }
            },
            stop: function () {

            }
          })
        })
      }, 2500)
    }, 2500)
  }, 1500)
  return (
    <div className="container global-container" id="content">
      <div id="zoom-out-container" className="world-wrapper zoom-center zoom-out" style={{
      }}>
        <div className="world-wrapper"
          style={{
            backgroundImage: 'url(' + BgLab + ')', backgroundSize: '155%', backgroundPosition: "-30rem -8rem",
            padding: "2rem", color: "white"
          }}>
          <div style={{
            display: "block", width: "84rem", height: "auto", position: "absolute", bottom: "14.5rem", left: "14rem"
          }}>
            <img id="tubeSingle" src={Tubesingle} style={{
              position: "absolute", left: "-6.25rem", top: "1.5rem",
              zIndex: 3000,
              width: '12rem', height: "auto", opacity: 1
            }}></img>

            <p id="instruksi" className="text-label" style={{ width: "10rem", bottom: "14.5rem", left: "3.75rem", opacity: 0 }}>
              Tahap ini peneliti harus menggunting ujung swab agar tabung tertutup</p>
            <img id="swab" src={SwabCells} className="swab-first" style={{
              left: "2.5rem",
              top: "-4.75rem",
              transform: "rotate(0)",
              position: "absolute",
              zIndex: 1000,
              width: '1.425rem', height: "auto"
            }}></img>
            <div id="gunting-hitbox" style={{
              position: "absolute", left: "0.5rem", top: "-12rem",
              zIndex: 1,
              height: "6rem",
              display: "none",
              width: '5rem', backgroundColor: "transparent"
            }}></div>
            <img id="bud" src={Bud} className="swab-first" style={{
              left: "2.45rem",
              top: "-8.95rem",
              transform: "rotate(180deg)",
              position: "absolute",
              opacity: 0,
              zIndex: 1000,
              width: '1.425rem', height: "auto"
            }}></img>
            {/* 
                swab
                left: 7.5rem;
                top: -10.5rem;
                transform: rotate(
                148deg);

                pipetor
                left: 32.5rem;
                top: -14.5rem;
                transform: rotate(
                25deg);
            */}
            <img id="arrow-gunting" src={Arrow} style={{
              left: "17.5rem",
              top: "-5.5rem",
              transform: "rotate(95deg)",
              position: "absolute",
              opacity: 0,
              zIndex: 4000,
              width: '4.425rem', height: "auto"
            }}></img>
            <img id="gunting" src={Gunting} style={{
              left: "8.5rem",
              top: "2.5rem",
              transform: "rotate(0)",
              position: "absolute",
              zIndex: 4000,
              width: '19.425rem', height: "auto"
            }}></img>
            <img id="pipetBox" src={PipetBox} style={{
              left: "33.5rem",
              top: "-10.5rem",
              transform: "rotate(-6deg)",
              position: "absolute",
              width: '16.425rem', height: "auto"
            }}></img>
            <div id="pipet-hitbox" style={{
              position: "absolute", left: "32.5rem", top: "-16.5rem",
              zIndex: 1,
              height: "7rem",
              display: "none",
              width: '12rem', backgroundColor: "transparent"
            }}></div>
            <img id="lysisBottle" src={LysisBottle} style={{
              left: "39.5rem",
              top: ".5rem",
              transform: "rotate(0)",
              position: "absolute",
              width: '4.425rem', height: "auto"
            }}></img>
            <div id="bottle-hitbox" style={{
              position: "absolute", left: "10.5rem", top: "-17.5rem",
              zIndex: 1,
              height: "3rem",
              display: "none",
              width: '4rem', backgroundColor: "transparent"
            }}></div>
            <div id="tube-hitbox" style={{
              position: "absolute", left: "0.5rem", top: "-17.5rem",
              zIndex: 1,
              height: "3rem",
              display: "none",
              width: '5rem', backgroundColor: "transparent"
            }}></div>
            <img id="lysisCap" src={LysisCap} style={{
              left: "40.45rem",
              top: "-0.75rem",
              transform: "rotate(0)",
              position: "absolute",
              width: '2.425rem', height: "auto"
            }}></img>
            <img id="pipetSingle" src={PipetSingle} style={{
              left: "-6.45rem",
              top: "-2.75rem",
              zIndex: 10000,
              transform: "rotate(-77deg)",
              position: "absolute",
              width: '5rem', height: "auto"
            }}></img>
            <img id="waterBath" src={WaterBath} style={{
              left: "-31.55rem",
              top: "-10.75rem",
              zIndex: 10,
              position: "absolute",
              width: '16.55rem', height: "auto"
            }}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page8() {
  setTimeout(() => {
    $("#tubeSingle").css({
      transition: "all 1.5s ease-out",
      transform: "rotate(67deg) scale(24.5)",
      top: "-18rem",
      left: "44rem",
      opacity: 1
    })
    setTimeout(() => {
      $("#cell").css({
        transition: "all 2.5s ease-out",
        transformOrigin: 100 % 0,
        transform: "scale(3.9)",
        opacity: 1,
        top: "-9rem"
      })
      setTimeout(() => {
        $("#cellzoom").css({
          transition: "all 2.5s ease-out",
          transform: "scale(2)",
          left: "2rem",
          top: "-41rem",
          opacity: 1
        })
        setTimeout(() => {
          $("#cellzoom").attr({
            src: CellZoomBroken
          })
          setTimeout(() => {
            $("#cellcore").css({
              transition: "all 2s ease-out",
              opacity: 1,
              transform: "scale(1.75)"
            })
            setTimeout(() => {
              $("#cellcore").css({
                transition: "all 2s ease-out",
                opacity: 1,
                transform: "scale(1.05)"
              })
              $("#cellcore").attr({
                src: CellCoreOpen
              })
              setTimeout(() => {
                $("#cellcorechromo").css({
                  transition: "all 2s ease-out",
                  opacity: 1,
                  transform: "scale(1.05)"
                })
                setTimeout(() => {
                  $("#cellcorechromo").attr({
                    src: CellCoreDna
                  })
                  $("#cellcorechromo").css({
                    transition: "all 2s ease-out",
                    opacity: 1,
                    transform: "scale(0.55)"
                  })
                  setTimeout(() => {
                    $("#cellcorechromo").css({
                      transform: "scale(0.55) translateY(5rem) translateX(8rem)"
                    })
                    setTimeout(() => {
                      $("#cellcorechromo").css({
                        transform: "scale(1.55) translateY(2rem) translateX(-8rem)"
                      })
                      setTimeout(() => {
                        $("#cellcorechromo").css({
                          transform: "scale(1.55) translateY(13rem) translateX(-8rem)"
                        })
                        setTimeout(() => {
                          $("#cellcorechromo").css({
                            transform: "scale(1.55) translateY(13rem) translateX(4rem)"
                          })
                          setTimeout(() => {
                            $("#instruksi").css({
                              opacity: 1
                            })
                            $("#histon").css({
                              opacity: 1
                            })
                            $("#arrow").css({
                              opacity: 1
                            })
                            $("#nextButton").css({
                              display: "block"
                            })
                            $("#nextButton").click(() => {
                              $("#instruksi").css({
                                opacity: 0
                              })
                              $("#histon").css({
                                opacity: 0
                              })
                              $("#arrow").css({
                                opacity: 0
                              })
                              $("#nextButton").css({
                                display: "none"
                              })
                              setTimeout(() => {
                                $("#cellcorechromo").attr({
                                  src: CellCoreDnaBroken
                                })
                                $("#cellcorechromo").css({
                                  transform: "scale(1.55) translateY(13rem) translateX(-2rem)"
                                })
                                setTimeout(() => {
                                  $("#cellcorechromo").attr({
                                    src: CellCoreDnaString
                                  })
                                  setTimeout(() => {
                                    $("#cellcorechromo").css({
                                      transform: "scale(0.4)",
                                      opacity: 0,
                                    })
                                    setTimeout(() => {
                                      $("#cellcore").css({
                                        transform: "scale(0.4)",
                                        opacity: 0,
                                      })
                                      setTimeout(() => {
                                        $("#cellzoom").css({
                                          transform: "scale(0.4)",
                                          opacity: 0,
                                        })
                                        setTimeout(() => {
                                          $("#cell").css({
                                            transform: "scale(1)",
                                            top: "-16.25rem",
                                            opacity: 0,
                                          })
                                          setTimeout(() => {
                                            $("#tubeSingle").css({
                                              transform: "rotate(67deg)",
                                              left: "42.25rem", top: ".75rem",
                                              opacity: 0,
                                            })
                                            setTimeout(() => {
                                              $("#waterBath").attr({
                                                src: WaterBath
                                              })
                                              $("#tubeClosed").css({
                                                transition: "all 2s ease-out",
                                                transform: "rotate(67deg) scale(3)",
                                                left: "33.75rem",
                                                top: "3.5rem",
                                                opacity: "1"
                                              })
                                              setTimeout(() => {
                                                $("#canvas").css({
                                                  transition: "all 2s ease-out",
                                                  transform: "none"
                                                })
                                                $("#canvas").removeClass("zoom-out")
                                                setTimeout(() => {
                                                  window.location.href = "/page9";
                                                }, 2500)
                                              }, 2500)
                                            }, 2500)
                                          }, 2500)
                                        }, 2500)
                                      }, 2500)
                                    }, 2500)
                                  }, 2500)
                                }, 2500)
                              }, 2500)
                            })
                          }, 2500)
                        }, 2000)
                      }, 2000)
                    }, 2000)
                  }, 2000)
                }, 2000)
              }, 2000)
            }, 2000)
          }, 1500)
        }, 3000)
      }, 3000)
    }, 3000)
  }, 2500)
  return (
    <div className="container global-container" id="content">
      <div id="canvas" className="world-wrapper zoom-center zoom-out" style={{
        transform: "scale(2.85) translateY(-10rem) translateX(-15rem)"
      }}>
        <div className="world-wrapper"
          style={{
            backgroundImage: 'url(' + BgLab + ')', backgroundSize: '155%', backgroundPosition: "-30rem -8rem",
            padding: "2rem", color: "white"
          }}>
          <div style={{
            display: "block", width: "84rem", height: "auto", position: "absolute", bottom: "14.5rem", left: "14rem"
          }}>
            <img src={Tubesclosed} id="tubeClosed" style={{
              position: "absolute", left: "41.75rem", top: "0.5rem",
              transform: "rotate(67deg)",
              zIndex: 3000,
              width: '2rem', height: "auto", opacity: 0
            }}></img>
            <img id="waterBath" src={WaterBathTube} style={{
              left: "36.215rem",
              top: "-10.75rem",
              zIndex: 10,
              position: "absolute",
              width: '16.55rem', height: "auto"
            }}></img>
            <img id="tubeSingle" src={Tubesclosed} style={{
              transform: "rotate(67deg)",
              position: "absolute", left: "42.25rem", top: ".75rem",
              zIndex: 3000,
              width: '2rem', height: "auto", opacity: 0
            }}></img>
            <img id="cell" src={Cell} style={{
              position: "absolute", left: "36.25rem", top: "-16.25rem",
              zIndex: 3000,
              opacity: 0,
              width: '11.5rem', height: "auto"
            }}></img>
            <img id="cellzoom" src={CellZoom} style={{
              position: "absolute", left: "-2rem", top: "-43.25rem",
              transform: "scale(0.4)",
              zIndex: 3000,
              opacity: 0,
              width: '92.5rem', height: "auto"
            }}></img>
            <img id="cellcore" src={CellCore} style={{
              position: "absolute", left: "-1.25rem", top: "-23.25rem",
              transform: "scale(0.4)",
              zIndex: 3000,
              opacity: 0,
              width: '90.5rem', height: "auto"
            }}></img>
            <img id="cellcorechromo" src={CellCoreChromo} style={{
              position: "absolute", left: "-1.25rem", top: "-23.25rem",
              transform: "scale(0.4)",
              zIndex: 3000,
              opacity: 0,
              width: '90.5rem', height: "auto"
            }}></img>
            <p id="instruksi" className="text-label" style={{
              height: "auto",
              width: "9rem",
              top: "0.5rem",
              bottom: "auto",
              left: "28.75rem",
              opacity: 0,
              fontSize: "5pt",
              zIndex: 3000
            }}>
              Larutan lisis terdiri dari dua bahan, yaitu detergen dan enzim proteinase K. Detergen berfungsi untuk menghancurkan membrane sel dan membrane inti. Namun, DNA masih terikan oleh protein histon, fungsi enzim proteinase menghancurkan protein histon sehingga dna dapat terurai</p>
            <p id="histon" className="text-label" style={{
              height: "auto",
              width: "auto",
              top: "1.5rem",
              bottom: "auto",
              left: "41.75rem",
              opacity: 0,
              fontSize: "5pt",
              zIndex: 3000
            }}>Protein Histon</p>
            <div id="nextButton" style={{ display: "none", position: "absolute", top: "4.95rem", left: "53rem", zIndex: 10002 }}>
              <img src={Next} style={{
                width: '2.5rem', height: "auto"
              }}></img>
            </div>
            <img id="arrow" src={Arrow} style={{
              left: "43.5rem",
              top: "-1.5rem",
              transform: "rotate(-75deg)",
              position: "absolute",
              opacity: 0,
              zIndex: 4000,
              width: '3.425rem', height: "auto"
            }}></img>
            <img id="pipetBox" src={PipetBox} style={{
              left: "13.5rem",
              top: "-10.5rem",
              transform: "rotate(-6deg)",
              position: "absolute",
              width: '16.425rem', height: "auto"
            }}></img>

            <img id="saltBottle" src={SaltBottle} style={{
              left: "12.5rem",
              top: "-2.5rem",
              transform: "rotate(0)",
              position: "absolute",
              width: '4.425rem', height: "auto"
            }}></img>

            <img id="saltCap" src={SaltCap} style={{
              left: "13.55rem",
              top: "-3.65rem",
              transform: "rotate(0)",
              position: "absolute",
              width: '2.425rem', height: "auto"
            }}></img>
            <img id="pipetSingle" src={PipetSingle} style={{
              left: "-12.45rem",
              top: "-10.75rem",
              zIndex: 10000,
              position: "absolute",
              width: '5rem', height: "auto"
            }}></img>

          </div>
        </div>
      </div>
    </div>
  );
}


function Page9() {
  setTimeout(function () {
    $("#tubeClosed").css({
      transition: "all 2.5s ease",
      transform: "scale(5.75) rotate(67deg)",
      left: "0rem",
      top: "0rem"
    })
    $("#pipetBox").css({
      transition: "all 2.5s ease",
      left: "33rem"
    })
    $("#pipet-hitbox").css({
      transition: "all 2.5s ease",
      left: "33rem"
    })
    $("#waterBath").css({
      transition: "all 2.5s ease",
      left: "72rem"
    })
    setTimeout(function () {
      $("#tubeClosed").attr({
        src: Tubesfilled
      })
      setTimeout(function () {
        $("#swabHead").css({
          opacity: 1
        })
        $("#tubeClosed").attr({
          src: Tubesfilledempty
        })
        setTimeout(function () {
          $("#instruksi").css({
            opacity: 1
          })
          $("#arrow").css({
            opacity: 1
          })
          $("#tubeClosed").click(() => {
            $("#swabHead").css({
              transition: "all 3.5s ease",
              zIndex: "30000",
              top: "-20rem"
            })
            setTimeout(() => {
              $("#swabHead").css({
                transition: "all 3.5s ease",
                left: "-90rem",
                top: "20rem"
              })
              setTimeout(() => {
                $("#arrow").css({
                  transition: "all 2.5s ease",
                  left: "-7.5rem",
                  transform: "rotate(165deg)"
                })
                $("#saltCap").addClass("pullback-lysisCap")
                $("#instruksi").text("tambahkan larutan garam pekat (seret micropipettor) ke tabung tersebut")
                $("#pipetSingle").draggable({
                  start: function () {
                    $("#pipet-hitbox").css({ display: 'block' });
                    $("#arrow").css({
                      transition: "all 2.5s ease",
                      left: "28.5rem",
                      transform: "rotate(35deg)"
                    })
                  },
                  drag: function () {
                    console.log(isOverlap("#pipetSingle", "#pipet-hitbox"))
                    if (isOverlap("#pipetSingle", "#pipet-hitbox")) {
                      $('#pipetSingle').attr({
                        src: PipetTip
                      });
                      $("#pipet-hitbox").css({ display: 'none' });
                      $("#bottle-hitbox").css({ display: 'block' });
                    }
                    if ($("#bottle-hitbox").css("display") == "block") {
                      $("#arrow").css({
                        transition: "all 2.5s ease",
                        left: "17.5rem",
                        transform: "rotate(135deg)"
                      })
                      if (isOverlap("#pipetSingle", "#bottle-hitbox")) {
                        $("#arrow").css({
                          transition: "all 2.5s ease",
                          top: "-5.5rem",
                          left: "4.5rem",
                          transform: "rotate(135deg)"
                        })
                        $('#pipetSingle').attr({
                          src: PipetFilled
                        });
                        $("#bottle-hitbox").css({ display: 'none' });
                        $("#tube-hitbox").css({ display: 'block' });
                      }
                    }
                    if ($("#tube-hitbox").css("display") == "block") {
                      if (isOverlap("#pipetSingle", "#tube-hitbox")) {
                        $("#arrow").css({
                          opacity: 0
                        })
                        $('#pipetSingle').attr({
                          src: PipetTip
                        });
                        $('#tubeSingle').attr({
                          src: Tubesfilled
                        });
                        $('#lysisBottle').removeClass("pullback-lysisBottle");
                        $('#saltCap').removeClass("pullback-lysisCap");
                        $('#pipetSingle').draggable("destroy")
                        setTimeout(function () {
                          $('#pipetSingle').css({
                            transition: "all 2.5s ease",
                            transform: "rotate(-77deg)",
                            left: "46.45rem",
                            top: "-2.75rem",
                          })
                          $("#tubeClosed").attr({
                            src: Tubesclosedempty
                          })
                          $('#tubeClosed').css({
                            transition: "all 2.5s ease",
                            transform: "scale(5) rotate(67deg)",
                          })
                          setTimeout(function () {
                            $('#canvas').css({
                              transition: "all 2.5s ease",
                              transform: "scale(2)",
                              transformOrigin: "left bottom"
                            })
                            setTimeout(function () {
                              $('#tubeClosed').css({
                                left: "-10rem",
                                top: "-10rem",
                                transition: "all 2.5s ease",
                                transform: "scale(15) rotate(67deg)",
                                transformOrigin: "left bottom"
                              })
                              setTimeout(function () {
                                $('#tubeClosed').css({
                                  left: "-32rem",
                                  top: "-60rem",
                                  transition: "all 2.5s ease",
                                  transform: "scale(45) rotate(67deg)",
                                  transformOrigin: "left bottom"
                                })
                                setTimeout(function () {
                                  $('#debris-canvas').css({
                                    transition: "all 2.5s ease",
                                    opacity: 1,
                                    zIndex: 10000
                                  })
                                  setTimeout(function () {
                                    $('#dna1').css({
                                      transition: "all 3.5s ease, opacity 0.5s ease",
                                      transform: "rotate(80deg)",
                                      left: "9.75rem",
                                      opacity: 1,
                                      zIndex: 10001
                                    })
                                    $('#dna2').css({
                                      transition: "all 3.5s ease, opacity 0.5s ease",
                                      transform: "rotate(-60deg)",
                                      left: "9.75rem",
                                      top: "2.5rem",
                                      opacity: 1,
                                      zIndex: 10001
                                    })
                                    $('#debris1').css({
                                      transition: "all 3.5s ease, opacity 0.5s ease",
                                      transform: "rotate(370deg)",
                                      left: "-6.75rem",
                                      top: "7rem",
                                      opacity: 1,
                                      zIndex: 10001
                                    })
                                    $('#debris2').css({
                                      transition: "all 3.5s ease, opacity 0.5s ease",
                                      transform: "rotate(260deg)",
                                      left: "-4.75rem",
                                      opacity: 1,
                                      zIndex: 10001
                                    })
                                    setTimeout(function () {
                                      $('#nextButton').css({
                                        transition: "all 3.5s ease",
                                        display: "block"
                                      })
                                      $("#instruksi").text("Garam menyatukan protein dan serpihan sel, memisahkannya dari untaian DNA")
                                      $("#instruksi").css({
                                        width: "10rem",
                                        bottom: "-2.5rem",
                                        left: "-11.25rem",
                                        zIndex: 30001,
                                      })
                                      $("#nextButton").on("click", function () {
                                        $("#debris1").css({
                                          opacity: 0
                                        })
                                        $("#debris2").css({
                                          opacity: 0
                                        })
                                        $("#dna1").css({
                                          opacity: 0
                                        })
                                        $("#dna2").css({
                                          opacity: 0
                                        })
                                        $("#instruksi").css({
                                          opacity: 0
                                        })
                                        setTimeout(() => {
                                          window.location.href = "/page10";
                                        }, 1500)
                                      })
                                    }, 1500)
                                  }, 1500)
                                }, 1500)
                              }, 1500)
                            }, 1500)
                          }, 1500)
                        }, 1500)
                        $("#tube-hitbox").css({ display: 'none' });
                      }
                    }
                  },
                  stop: function () {

                  }
                })
              })
            }, 1500)
          })
        }, 1500)
      }, 1500)
    }, 1500)
  }, 1500)
  return (
    <div className="container global-container" id="content">
      <div id="canvas" className="world-wrapper zoom-center" >
        <div className="world-wrapper"
          style={{
            backgroundImage: 'url(' + BgLab + ')', backgroundSize: '155%', backgroundPosition: "-30rem -8rem",
            padding: "2rem", color: "white"
          }}>
          <div style={{
            display: "block", width: "84rem", height: "auto", position: "absolute", bottom: "14.5rem", left: "14rem"
          }}>
            <img src={Tubesclosed} id="tubeClosed" style={{
              position: "absolute", left: "33.75rem", top: "3.5rem",
              transform: "rotate(67deg)  scale(3)",
              zIndex: 3000,
              width: '2rem', height: "auto", opacity: 1
            }}></img>
            <img src={Cell} id="swabHead"
              style={{
                position: "absolute", left: "1.2rem", top: "2.75rem",
                zIndex: 10,
                width: '1.25rem', height: "auto", opacity: 0
              }}></img>
            <img id="waterBath" src={WaterBath} style={{
              left: "36.215rem",
              top: "-10.75rem",
              zIndex: 10,
              position: "absolute",
              width: '16.55rem', height: "auto"
            }}></img>
            <img id="pipetBox" src={PipetBox} style={{
              left: "13.5rem",
              top: "-10.5rem",
              transform: "rotate(-6deg)",
              position: "absolute",
              width: '16.425rem', height: "auto"
            }}></img>
            <div id="pipet-hitbox" style={{
              position: "absolute", left: "12.5rem", top: "-16.5rem",
              zIndex: 1,
              height: "7rem",
              display: "none",
              width: '12rem', backgroundColor: "transparent"
            }}></div>

            <img id="saltBottle" src={SaltBottle} style={{
              left: "12.5rem",
              top: "-2.5rem",
              transform: "rotate(0)",
              position: "absolute",
              width: '4.425rem', height: "auto"
            }}></img>
            <div id="bottle-hitbox" style={{
              position: "absolute", left: "12.5rem", top: "-17.5rem",
              zIndex: 1,
              height: "3rem",
              display: "none",
              width: '4rem', backgroundColor: "transparent"
            }}></div>

            <img id="saltCap" src={SaltCap} style={{
              left: "13.55rem",
              top: "-3.65rem",
              transform: "rotate(0)",
              position: "absolute",
              width: '2.425rem', height: "auto"
            }}></img>


            <div id="tube-hitbox" style={{
              position: "absolute", left: "-0.5rem", top: "-17.5rem",
              zIndex: 1,
              height: "3rem",
              display: "none",
              width: '5rem', backgroundColor: "transparent"
            }}></div>
            <img id="pipetSingle" src={PipetSingle} style={{
              left: "-12.45rem",
              top: "-10.75rem",
              zIndex: 10000,
              position: "absolute",
              width: '5rem', height: "auto"
            }}></img>
            <div id="debris-canvas" style={{
              position: "absolute", left: "-23.5rem", top: "-17.5rem",
              zIndex: 10,
              height: "100rem",
              display: "block",
              opacity: 0,
              width: '100rem', backgroundColor: "#7dd9f0"
            }}></div>

            <img id="debris1" src={Debris1} style={{
              left: "-9.45rem",
              top: "-4.75rem",
              zIndex: 10000,
              position: "absolute",
              opacity: 0,
              width: '7.5rem', height: "auto"
            }}></img>
            <img id="dna1" src={Dna1} style={{
              left: "-7.45rem",
              top: "-4.75rem",
              zIndex: 10000,
              position: "absolute",
              opacity: 0,
              width: '4.5rem', height: "auto"
            }}></img>
            <img id="debris2" src={Debris2} style={{
              left: "9.45rem",
              top: "4.75rem",
              zIndex: 10000,
              position: "absolute",
              opacity: 0,
              width: '7.5rem', height: "auto"
            }}></img>
            <img id="dna2" src={Dna2} style={{
              left: "9.45rem",
              top: "4.75rem",
              zIndex: 10000,
              position: "absolute",
              opacity: 0,
              width: '4.5rem', height: "auto"
            }}></img>

            <div id="nextButton" style={{ display: "none", position: "absolute", top: "9.95rem", left: "20rem", zIndex: 10002 }}>
              <img src={Next} style={{
                width: '3.5rem', height: "auto"
              }}></img>
            </div>
            <p id="instruksi" className="text-label" style={{ width: "10rem", bottom: "14.5rem", left: "3.75rem", opacity: 0 }}>
              Selanjutnya, peneliti mengeluarkan buccal swab dari tabung</p>
            <img id="arrow" src={Arrow} style={{
              left: "0.5rem",
              top: "-9.5rem",
              transform: "rotate(85deg)",
              position: "absolute",
              opacity: 0,
              zIndex: 4000,
              width: '4.425rem', height: "auto"
            }}></img>
            {/* <img id="arrow-gunting" src={Arrow} style={{
              left: "-7.5rem",
              top: "-9.5rem",
              transform: "rotate(135deg)",
              position: "absolute",
              opacity:1,
              zIndex: 4000,
              width: '4.425rem', height: "auto"
            }}></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}
function shake(i = 1) {
  $('#tubeOpen').css({
    transform: "rotate(-37deg) scale(5)",
    transition: "all 0.5s ease",
  })
  setTimeout(() => {
    $('#tubeOpen').attr({
      src: Tubeshake2
    })
    $('#tubeOpen').css({
      transform: "rotate(-127deg) scale(5)",
      transition: "all 0.5s ease",
    })
    setTimeout(() => {
      $('#tubeOpen').attr({
        src: Tubeshake3
      })
      $('#tubeOpen').css({
        transform: "rotate(-37deg) scale(5)",
        transition: "all 0.5s ease",
      })
      setTimeout(() => {
        $('#tubeOpen').attr({
          src: Tubeshake2
        })
        $('#tubeOpen').css({
          transform: "rotate(67deg) scale(5)",
          transition: "all 0.5s ease",
        })
        setTimeout(() => {
          $('#tubeOpen').css({
            transition: "all 0.5s ease",
          })
          $('#tubeOpen').attr({
            src: Tubesclosedempty
          })
        }, 600)
      }, 600)
    }, 600)
  }, (i + 600))
}
function Page10() {
  setTimeout(function () {
    $('#debris-canvas').css({
      transition: "all 2.5s ease",
      opacity: 0
    })
    $('#centrifuge').css({
      transition: "all 2.5s ease",
      opacity: 1
    })
    $('#tubeClosed').css({
      transition: "all 2.5s ease",
      left: "16.75rem",
      top: "36.5rem",
      transform: "rotate(67deg)  scale(3)",
      opacity: 1
    })
    setTimeout(function () {
      $('#canvas').css({
        transition: "all 2.5s ease",
        transform: "none",
      })
      setTimeout(function () {
        $('#centrifuge').attr({
          src: CentrifugeOpen
        })
        $('#tubeClosed').css({
          transition: "none"
        })
        $("#instruksi").css({
          opacity: 1
        })
        $('#tubeClosed').draggable({
          start: function () {
            $("#centrifuge-hitbox").css({ display: 'block' });
          },
          drag: function () {
            if (isOverlap("#tubeClosed", "#centrifuge-hitbox")) {

              $("#centrifuge-hitbox").css({ display: 'none' });
              $('#tubeClosed').css({
                transition: "transform 0s ease",
                transform: "rotate(120deg)"
              })
              $('#tubeClosed').css({
                transition: "all 2.5s ease",
                left: "21.75rem",
                top: "20.25rem",
                opacity: 0
              })
              setTimeout(() => {
                $('#centrifuge').attr({
                  src: CentrifugeOpen2
                })
                $('#tubeClosed2').css({
                  transition: "all 2.5s ease",
                  transform: "rotate(67deg) scale(3)",
                  left: "10.75rem",
                  top: "27.25rem"
                })
                setTimeout(() => {
                  $('#centrifuge').attr({
                    src: CentrifugeOpen2
                  })
                  $('#tubeClosed2').css({
                    transition: "none",
                  })
                  $("#instruksi").text("Tambahkan 1 tabung sampel lain agar putaran sentrifuge seimbang")
                  $('#tubeClosed2').draggable({
                    start: function () {
                      $("#centrifuge-hitbox").css({ display: 'block' });
                    },
                    drag: function () {
                      if (isOverlap("#tubeClosed2", "#centrifuge-hitbox")) {
                        $("#centrifuge-hitbox").css({ display: 'none' });
                        $('#tubeClosed2').css({
                          transition: "transform 0s ease",
                          transform: "rotate(0)"
                        })
                        $('#tubeClosed2').css({
                          transition: "all 2.5s ease",
                          left: "21.75rem",
                          top: "20.25rem",
                          opacity: 0
                        })
                        $("#instruksi").text("Tutup, dan klik tombol hijau untuk menjalankan sentrifuge")
                        $("#centrifuge").click(() => {
                          $('#centrifuge').attr({
                            src: CentrifugeClosed
                          })
                          setTimeout(() => {
                            $('#canvas').css({
                              transition: "all 2.5s ease",
                              transform: "scale(2) translateX(-13rem) translateY(3rem)"
                            })
                            $('#centrifuge').prop("onclick", null).off("click");
                            setTimeout(() => {
                              $("#centrifuge").click(() => {
                                setTimeout(() => {
                                  $('#centrifuge').prop("onclick", null).off("click");
                                  $('#centrifuge').attr({
                                    src: CentrifugeClosed2
                                  })
                                  setTimeout(() => {
                                    $('#centrifuge').attr({
                                      src: CentrifugeClosed
                                    })
                                    setTimeout(() => {
                                      $('#centrifuge').attr({
                                        src: CentrifugeClosed2
                                      })
                                      setTimeout(() => {
                                        $('#centrifuge').attr({
                                          src: CentrifugeClosed
                                        })
                                        setTimeout(() => {

                                          $('#centrifuge').attr({
                                            src: CentrifugeOpen3
                                          })
                                          $('#tubeClosed2').attr({
                                            src: Tubescloseddebris
                                          })
                                          $('#tubeClosed2').css({
                                            transform: "rotate(67deg) scale(4)",
                                            transition: "all 2.5s ease",
                                            left: "21.75rem",
                                            top: "35.25rem",
                                            opacity: 1
                                          })
                                          $("#instruksi").css({
                                            width: "10rem",
                                            bottom: "18.5rem",
                                            fontSize: "6pt",
                                            left: "15.75rem"
                                          })
                                          $("#nextButton").css({
                                            display: "block"
                                          })
                                          $("#instruksi").text("Didalam sentrifuge, tabung diputar dengan kecepatan tinggi. Protein dan serpihan sel memiliki bobot yg lebih berat mengendap, sementara untai DNA tetap dibagian atas cairan. ")
                                          $("#nextButton").click(() => {
                                            $("#nextButton").css({
                                              display: "none"
                                            })
                                            $("#instruksi").css({
                                              display: "none"
                                            })
                                            $('#canvas').css({
                                              transition: "all 2.5s ease",
                                              transform: "none"
                                            })
                                            $('#centrifuge').css({
                                              transition: "all 2.5s ease",
                                              left: "53rem"
                                            })
                                            $('#tubeClosed2').attr({
                                              src: Tubesopendebris
                                            })
                                            $('#tubeClosed2').css({
                                              transform: "rotate(67deg) scale(6)",
                                              transition: "all 2.5s ease",
                                            })
                                            $('#pipetSingle').css({
                                              left: "31rem",
                                              transition: "all 2.5s ease",
                                            })
                                            $('#tubeOpen').css({
                                              transform: "rotate(67deg) scale(6)",
                                              transition: "all 2.5s ease",
                                              left: "11.75rem",
                                              top: "35.25rem",
                                              opacity: 1
                                            })
                                            setTimeout(() => {
                                              $('#pipetSingle').css({
                                                transition: "none"
                                              })
                                              $("#instruksi").text("Peneliti memisahkan untaian DNA dari endapan protein ke tube kosong.")
                                              $('#instruksi').css({
                                                display: "block",
                                                bottom: "28.5rem",
                                                left: "15.75rem",
                                                fontSize: "10pt"
                                              })
                                              $('#pipetSingle').draggable({
                                                start: function () {
                                                },
                                                drag: function () {
                                                  if ($('#tubeClosed2-hitbox').css("display") == "block") {
                                                    if (isOverlap("#pipetSingle", "#tubeClosed2-hitbox")) {
                                                      $("#pipetSingle").attr({
                                                        src: PipetFilled
                                                      })
                                                      $("#tubeClosed2").attr({
                                                        src: Tubesemptydebris
                                                      })
                                                    }
                                                    if (isOverlap("#pipetSingle", "#tubeOpen-hitbox")) {
                                                      $("#pipetSingle").attr({
                                                        src: PipetTip
                                                      })
                                                      $("#tubeOpen").attr({
                                                        src: Tubesfilledempty
                                                      })
                                                      setTimeout(() => {
                                                        $('#saltBottle').css({
                                                          left: "36.5rem",
                                                          transition: "all 2.5s ease",
                                                        })
                                                        $('#saltCap').css({
                                                          left: "37.45rem",
                                                          transition: "all 2.5s ease",
                                                        })
                                                        setTimeout(() => {
                                                          $('#saltCap').css({
                                                            transform: "translateX(6rem) translateY(8rem)",
                                                            transition: "all 1.5s ease",
                                                          })
                                                          $("#tubeClosed2").css({
                                                            left: "-56rem",
                                                            transition: "all 1.5s ease",
                                                          })
                                                          $("#tubeOpen").css({
                                                            left: "21.75rem",
                                                            transition: "all 1.5s ease",
                                                          })
                                                          $("#instruksi").text("Peneliti harus menambahkan isopropil alcohol ke dalam tabung DNA sampel.")
                                                        }, 3500)
                                                      }, 1500)
                                                    }
                                                  }
                                                  if (isOverlap("#pipetSingle", "#bottle-hitbox")) {
                                                    $("#pipetSingle").attr({
                                                      src: PipetFilled
                                                    })
                                                    $('#saltCap').css({
                                                      transform: "none",
                                                      transition: "all 1.5s ease",
                                                    })
                                                    $('#tubeClosed2-hitbox').css({
                                                      display: "none"
                                                    })
                                                    $('#tubeOpen-hitbox').css({
                                                      left: "21.5rem",
                                                      transition: "all 2.5s ease",
                                                    })
                                                  }
                                                  if (isOverlap("#pipetSingle", "#tubeOpen-hitbox") && $('#tubeClosed2-hitbox').css("display") == "none") {
                                                    $("#pipetSingle").attr({
                                                      src: PipetTip
                                                    })
                                                    setTimeout(() => {
                                                      $('#pipetSingle').css({
                                                        left: "78.5rem",
                                                        top: "28.45rem",
                                                        transform: "rotate(-75deg)",
                                                        transition: "all 2.5s ease",
                                                      })
                                                      $('#saltBottle').css({
                                                        left: "-56.5rem",
                                                        transition: "all 2.5s ease",
                                                      })
                                                      $('#saltCap').css({
                                                        left: "-57.45rem",
                                                        transition: "all 2.5s ease",
                                                      })
                                                      setTimeout(() => {
                                                        $('#tubeOpen').attr({
                                                          src: Tubesclosedempty
                                                        })
                                                        $("#instruksi").text("Goyangkan tabung agar tercampur.")
                                                        $('#tubeOpen').click(() => {
                                                          for (let i = 0; i < 5; i++) {
                                                            let x = i * 3000
                                                            shake(x)
                                                            if (i == 4) {
                                                              setTimeout(() => {
                                                                $("#canvas").css({
                                                                  transform: "scale(2.5) translateX(-80px)"
                                                                })
                                                              }, (2 * 3000))
                                                              setTimeout(() => {
                                                                $('#tubeOpen').css({
                                                                  left: "26rem",
                                                                  top: "13rem",
                                                                  transition: "all 2.5s ease",
                                                                  transform: "scale(39) rotate(67deg)"
                                                                })
                                                                setTimeout(() => {
                                                                  $('#tubeOpen').css({
                                                                    opacity: 0,
                                                                    transition: "all 1.5s ease",
                                                                  })
                                                                  $('#debris-canvas').css({
                                                                    transition: "all 2.5s ease",
                                                                    opacity: 1
                                                                  })
                                                                  setTimeout(() => {
                                                                    window.location.href = "/page11";
                                                                  }, 1500)
                                                                }, 1500)
                                                              }, 5 * 3000)
                                                            }
                                                          }
                                                        })

                                                      }, 2500)
                                                    }, 1500)
                                                  }
                                                }
                                              })
                                            }, 2500)
                                          })

                                        }, 2500)
                                      }, 1000)
                                    }, 1000)
                                  }, 1000)
                                }, 1000)
                              })
                            }, 800)
                          }, 800)
                        })
                      }
                    }
                  })
                }, 1500)
              }, 1500)
            }
          }
        })
      }, 2500)
    }, 1500)
  }, 1500)
  return (
    <div className="container global-container" id="content">
      <div id="canvas" className="world-wrapper zoom-center" style={{
        transform: "scale(2)", transformOrigin: "left bottom"
      }} >
        <div className="world-wrapper"
          style={{
            backgroundImage: 'url(' + BgLab + ')', backgroundSize: '155%', backgroundPosition: "-30rem -8rem",
            padding: "2rem", color: "white"
          }}>
          <div style={{
            display: "block", width: "84rem", height: "auto", position: "absolute", bottom: "14.5rem", left: "14rem"
          }}>
            <div id="debris-canvas" style={{
              position: "absolute", left: "-23.5rem", top: "-17.5rem",
              zIndex: 10,
              height: "100rem",
              display: "block",
              opacity: 1,
              width: '100rem', backgroundColor: "#7dd9f0"
            }}></div>
          </div>
          <img src={Tubesclosedempty} id="tubeClosed" style={{
            position: "absolute", left: "25rem", top: "10rem",
            transform: "rotate(67deg)  scale(39)",
            zIndex: 30000,
            width: '2rem', height: "auto", opacity: 0
          }}></img>
          <div id="tubeClosed2-hitbox" style={{
            position: "absolute", left: "21.5rem", top: "21.5rem",
            zIndex: 1,
            height: "3rem",
            display: "block",
            width: '4rem', backgroundColor: "transparent"
          }}></div>
          <img src={Tubesclosedempty} id="tubeClosed2" style={{
            position: "absolute", left: "-35rem", bottom: "20rem",
            transform: "rotate(67deg)  scale(3)",
            zIndex: 30000,
            width: '2rem', height: "auto", opacity: 1
          }}></img>
          <div id="tubeOpen-hitbox" style={{
            position: "absolute", left: "11.5rem", top: "21.5rem",
            zIndex: 1,
            height: "3rem",
            display: "block",
            width: '4rem', backgroundColor: "transparent"
          }}></div>
          <img src={Tubesingle} id="tubeOpen" style={{
            position: "absolute", left: "-35rem", bottom: "20rem",
            transform: "rotate(67deg)  scale(3)",
            zIndex: 30000,
            width: '2rem', height: "auto", opacity: 1
          }}></img>
          <div id="centrifuge-hitbox" style={{
            position: "absolute", left: "29.5rem", top: "23.5rem",
            zIndex: 1,
            height: "7.3rem",
            display: "none",
            width: '9rem', backgroundColor: "transparent"
          }}></div>
          <img src={CentrifugeClosed} id="centrifuge" style={{
            position: "absolute", left: "28rem", top: "16rem",
            zIndex: 10000,
            width: '12rem', height: "auto", opacity: 0
          }}></img>

          <img id="pipetSingle" src={PipetTip} style={{
            left: "-61.45rem",
            top: "16.75rem",
            zIndex: 10000,
            position: "absolute",
            width: '5rem', height: "auto"
          }}></img>
          <img id="saltBottle" src={AlcoholBottle} style={{
            left: "-56.5rem",
            top: "33.5rem",
            transform: "rotate(0)",
            position: "absolute",
            width: '4.425rem', height: "auto"
          }}></img>
          <div id="bottle-hitbox" style={{
            position: "absolute",
            left: "36.5rem", top: "21.5rem",
            zIndex: 1,
            height: "3rem",
            display: "block",
            width: '4rem', backgroundColor: "transparent"
          }}></div>

          <img id="saltCap" src={AlcoholCap} style={{
            left: "-57.45rem",
            top: "32.15rem",
            transform: "rotate(0)",
            position: "absolute",
            width: '2.425rem', height: "auto"
          }}></img>


          <p id="instruksi" className="text-label" style={{ width: "10rem", bottom: "28.5rem", left: "15.75rem", opacity: 0 }}>
            Masukkan tabung sampel kedalam sentrifuge</p>
          <div id="nextButton" style={{ display: "none", position: "absolute", top: "39.95rem", left: "48rem", zIndex: 10002 }}>
            <img src={Next} style={{
              width: '3.5rem', height: "auto"
            }}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page11() {
  setTimeout(function () {
    $('#debris-canvas').css({
      transition: "all 2.5s ease",
      opacity: 0
    })
    $('#tubeClosedna').css({
      transition: "all 2.5s ease",
      left: "22.75rem",
      top: "20.5rem",
      transform: "rotate(67deg)  scale(24)",
      opacity: 1
    })
    setTimeout(()=>{
      $("#instruksi").css({
        opacity:1
      })
      $("#nextButton").css({
        display:"block"
      })
      $("#nextButton").click(()=>{
        $("#instruksi").css({
          opacity:0
        })
        $("#nextButton").css({
          display:"none"
        })
        setTimeout(() => {
          $('#tubeClosedna').css({
            transition: "all 2.5s ease",
            left: "18.75rem",
            top: "35.5rem",
            transform: "rotate(67deg)  scale(3)",
            opacity: 1
          })
          setTimeout(() => {
            $('#canvas').css({
              transition: "all 2.5s ease",
              transform: "none",
              opacity: 1
            })
            setTimeout(() => {
              $('#tubeClosedna').css({
                transition: "none"
              })
              $("#instruksi").text("Masukkan tabung ke dalam microcentrifuge, tutup, dan klik tombol hijau untuk menjalankan.")
              $("#instruksi").css({
                opacity:1,
                bottom: "28.5rem",
                left: "15.75rem",
                fontSize:"10pt"
              })
              $('#tubeClosedna').draggable({
                start: function () {
                  $('#centrifuge-hitbox').css({
                    display: "block",
                  })
                },
                drag: function () {
                  if (isOverlap("#tubeClosedna", "#centrifuge-hitbox")) {
                    $('#centrifuge-hitbox').css({
                      display: "none",
                    })
                    setTimeout(() => {
                      $('#tubeClosedna').css({
                        transition: "transform 0s ease",
                        transform: "rotate(157deg)"
                      })
                      $('#tubeClosedna').css({
                        transition: "all 2.5s ease",
                        left: "31.75rem",
                        top: "28.25rem",
                        opacity: 0
                      })
                      $('#centrifuge').attr({
                        src: CentrifugeOpen3
                      })
                      $('#debris-canvas').css({
                        display: "none"
                      })
                      $("#centrifuge").click(()=>{
                        console.log("OK")
                        $('#centrifuge').attr({
                          src: CentrifugeClosed
                        })
                        setTimeout(() => {
                          $('#centrifuge').attr({
                            src: CentrifugeOpen2
                          })
                          $('#tubeClosedna').attr({
                            src: Tubescloseddebris
                          })
                          $('#tubeClosedna').css({
                            transition: "all 1.5s ease",
                            left: "18.75rem",
                            top: "35.5rem",
                            transform: "rotate(67deg)  scale(3)",
                            opacity: 1
                          })
                          setTimeout(() => {
                            $('#tubeClosedna').attr({
                              src: Tubesopendebris
                            })
                            $('#tubeClosedna').css({
                              transition: "all 2.5s ease",
                              transform: "scale(4) rotate(67deg)"
                            })
                            $('#pipetSingle').css({
                              left: "31rem",
                              transition: "all 2.5s ease",
                            })
                            $('#centrifuge').css({
                              left: "51rem",
                              transition: "all 2.5s ease",
                            })
                            $("#instruksi").text("Ambil cairan dari tabung menggunakan micropipet, dan menyisakan DNA didasar tabung.")
                            $('#pipetSingle').draggable({
                              start: function () {
                                $("#pipetSingle").css({
                                  transition: "none"
                                })
                              },
                              drag: function () {
                                if (isOverlap("#pipetSingle", "#tubeOpen-hitbox")) {
                                  $("#tubeClosedna").attr({
                                    src: Tubesemptydebris
                                  })
                                  $("#pipetSingle").attr({
                                    src: PipetFilled
                                  })
                                  setTimeout(() => {
                                    $("#pipetSingle").css({
                                      transition: "all 2.5s ease",
                                      left: "61rem",
                                      top: "35rem",
                                      transform: "rotate(-75deg)"
                                    })
                                    $("#tubeClosedna").css({
                                      left: "15.75rem",
                                      top: "32rem",
                                      transform: "scale(8.25) rotate(67deg)"
                                    })
                                    $("#canvas").css({
                                      transform: "scale(2.25)"
                                    })
                                    setTimeout(()=>{
                                      $("#instruksi").css({
                                        left:"2.5rem",
                                        bottom:"5.5rem"
                                      })
                                      $("#nextButton").css({
                                        display:"block",
                                        left:"32rem"
                                      })
                                      $("nexButton").click(()=>{
                                        window.location.href="/"
                                      })
                                      $("#instruksi").text("Setelah cairan dihilangkan, DNA dapat digunakan untuk tahap analisis selanjutnya. Kita dapat menyimpan DNA hasil ekstraksi didalam freezer untuk beberapa tahun sebelum digunakan Kembali.")
                                    },2300)
                                  }, 1500)
                                }
                              }
                            })
                          }, 1500)
                        }, 2000)
                      })
                    }, 500)
                  }
                }
              })
              $('#centrifuge').attr({
                src: CentrifugeOpen
              })
            }, 1500)
          }, 1500)
        }, 1500)
      })
    },2500)
  }, 1500)
  return (
    <div className="container global-container" id="content">
      <div id="canvas" className="world-wrapper zoom-center" style={{
        transform: "scale(2)", transformOrigin: "left bottom"
      }} >
        <div className="world-wrapper"
          style={{
            backgroundImage: 'url(' + BgLab + ')', backgroundSize: '155%', backgroundPosition: "-30rem -8rem",
            padding: "2rem", color: "white"
          }}>
          <div style={{
            display: "block", width: "84rem", height: "auto", position: "absolute", bottom: "14.5rem", left: "14rem"
          }}>
            <div id="debris-canvas" style={{
              position: "absolute", left: "-23.5rem", top: "-17.5rem",
              zIndex: 1000,
              height: "100rem",
              display: "block",
              opacity: 1,
              width: '100rem', backgroundColor: "#7dd9f0"
            }}></div>
          </div>
          <img src={Tubesclosedna} id="tubeClosedna" style={{
            position: "absolute", left: "25rem", top: "10rem",
            transform: "rotate(67deg)  scale(39)",
            zIndex: 30000,
            width: '2rem', height: "auto", opacity: 0
          }}></img>

          <div id="tubeOpen-hitbox" style={{
            position: "absolute", left: "18.5rem", top: "21.5rem",
            zIndex: 1,
            height: "3rem",
            display: "block",
            width: '4rem', backgroundColor: "transparent"
          }}></div>
          <img id="pipetSingle" src={PipetTip} style={{
            left: "-61.45rem",
            top: "16.75rem",
            zIndex: 10000,
            position: "absolute",
            width: '5rem', height: "auto"
          }}></img>
          <div id="centrifuge-hitbox" style={{
            position: "absolute", left: "29.5rem", top: "23.5rem",
            zIndex: 1,
            height: "7.3rem",
            display: "none",
            width: '9rem', backgroundColor: "transparent"
          }}></div>
          <img src={CentrifugeClosed} id="centrifuge" style={{
            position: "absolute", left: "28rem", top: "16rem",
            zIndex: 100,
            width: '12rem', height: "auto", opacity: 1
          }}></img>
          <p id="instruksi" className="text-label" style={{ width: "10rem", bottom: "16.5rem", left: "0.75rem", opacity: 0, fontSize:"8pt"}}>
          Perhatikan dengan baik, karena DNA tidak larut dalam isoppropil alkohol, maka DNA akan keluar dari larutan dan dapat dilihat dengan mata telanjang.</p>
          <div id="nextButton" style={{ display: "none", position: "absolute", top: "43.95rem", left: "36rem", zIndex: 10002 }}>
            <img src={Next} style={{
              width: '3.5rem', height: "auto"
            }}></img>
          </div>
        </div>
      </div>
    </div>
  );
}