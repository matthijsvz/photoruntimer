
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import React, {Component} from 'react';
 
import { Col, Row, Grid } from "react-native-easy-grid";

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state={
            waarde:[]
        }

        this.addWaarde= this.addWaarde.bind (this);
        this.addGeslacht= this.addGeslacht.bind (this);
        this.addVraagteken= this.addVraagteken.bind (this);


    }

    addWaarde (getal) {
        this.setState ( {
            waarde: [...this.state.waarde, getal]
         }
        )
    }

    addGeslacht (geslacht) {

        if (this.state.waarde.length< 3) {
            return;
        }


      

        fetch ("http://medembliksport.test/data/v2/meetpunt", {
            method: 'POST',
            mode: 'CORS',
            body: {
                "nummer": JSON.stringify (this.state.waarde),
                "geslacht": geslacht
            },
            headers: {
              'Content-Type': 'application/json',
            }
        }).then (res => {
            if(res.status !== 200) {
            throw new Error('Niet gelukt om op te sturen.');
            }
            return res.JSON();
          }
        )

        .then (res => {
            console.log(res.id)
           }
         )


        .catch (error  => {
            console.log (error);
            Alert.alert (error.toString());

        })
     }

     addVraagteken (vraagteken) {

        if (this.state.waarde.length< 3) {
            this.setState ( {
                waarde: [...this.state.waarde, vraagteken]
             }
            )
            return;
        }

        fetch ("http://medembliksport.test/data/v2/meetpunt", {
            method: 'POST',
            mode: 'CORS',
            body: {
                "nummer": JSON.stringify (this.state.waarde), 
                "geslacht": vraagteken,
            },
            headers: {
              'Content-Type': 'application/json',
            }
        }).then (res => {
            if(res.status !== 200) {
            throw new Error('Niet gelukt om op te sturen.');
            }
            return res.JSON();
          }
        )

        .then (res => {
           console.log(res.id)
          }
        )

        .catch (error  => {
            console.log (error);
            Alert.alert (error.toString());

        })
     }



    render() {
      return (
        <View style={{flex:1 }}>


          <Grid style={{flex:1 }}>

         <Row>

         </Row>

          <Row style={{ backgroundColor:"lightgrey", flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 800}}>
                {this.state.waarde}
            </Text>
          </Row>

          <Row>
            <Col>
                <TouchableOpacity style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addWaarde("1")} >
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        1
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={ () => this.addWaarde("2")} >
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        2
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={ () => this.addWaarde("3")} >
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        3
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        X
                    </Text>
                </TouchableOpacity>
            </Col>

          </Row>

          <Row>
            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addWaarde("4")}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        4
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addWaarde("5")}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        5
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addWaarde("6")}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        6
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addGeslacht(" MAN ")}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        M
                    </Text>
                </TouchableOpacity>
            </Col>

          </Row>

          <Row>
            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addWaarde("7")}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        7
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addWaarde("8")}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        8
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addWaarde("9")}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        9
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addGeslacht(" VROUW ")}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        V
                    </Text>
                </TouchableOpacity>
            </Col>

          </Row>

          <Row>
            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>           
                        X
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addWaarde("0")}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        0
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => this.addVraagteken("?")} >
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        ?
                    </Text>
                </TouchableOpacity>
            </Col>

            <Col>
                <TouchableOpacity  style={{ backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 800}}>
                        X
                    </Text>
                </TouchableOpacity>
            </Col>

          </Row>

          <Row>

              
          </Row>

          </Grid>
        </View>
      );
    }
  }
  