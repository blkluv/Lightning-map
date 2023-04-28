import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
//import "./Dashboard.css";
import { Col, Container, Row, Table } from 'reactstrap';
import { auth, db, logout } from "../components/Firebase"
import { query, collection, getDocs, where } from "firebase/firestore";
import { Pwnspinner } from 'pwnspinner';
//https://blog.logrocket.com/user-authentication-firebase-react-apps/
//TS
import IEshop from "../ts/IEeshop";
import IMechant from "../ts/IMerchant";
interface IEshopAdmin {
    id: String,
    data: IEshop
}
interface IMerchantAdmin {
    id: String,
    data: IMechant
}

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [eshopsCZ, setEshopsCZ] = useState<any[]>([]);
    const [myMerchants, setMyMerchants] = useState<any[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        //owner for my mechants & eshops
        const owner = user?.uid

        const getMyEshopscz = async (db: any, owner: string) => {
            const eshopsczSnapshot: any = await getDocs(query(collection(db, 'eshops'), where('owner', '==', owner)));
            let eshopscz: any[] = []

            eshopsczSnapshot.forEach((doc: any) => {
                console.log(doc.id, " => ", doc.data())
                eshopscz.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            console.log("rewrapped eshopscz")
            console.log(eshopscz)
            setEshopsCZ(eshopscz)
        }
        const getMyMerchants = async (db: any, owner: string) => {
            const merchSnapshot = await getDocs(query(collection(db, 'merchants'), where('properties.owner', '==', owner)));
            let merchants: any[] = []

            merchSnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
                merchants.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            console.log("rewrapped merchants")
            console.log(merchants)
            setMyMerchants(merchants)
        }
        getMyEshopscz(db, owner)
        getMyMerchants(db, owner)
    }, [user, loading]);
    return (
        <>
            <style type="text/css">
                {`
                `}
            </style>
            <Container>
                <Row>
                    <Col>
                        <h1 className={"title"}>Credentials</h1>
                        <hr />
                        <div>&nbsp;</div>
                        <div className="dashboard boxed">
                            <div className="dashboard__container" style={{ textAlign: "center" }}>
                                {(!user)
                                    ? <Pwnspinner color="#FAC55E" thickness={10} />
                                    : <>
                                        <div>Welcome back <b>{user?.displayName}</b></div>
                                        <div>aka <b>{user?.email}</b> {/* / {user?.uid} */}</div>
                                        <button className="boxed btnStyle ptHover" onClick={logout}>
                                            Logout
                                        </button>
                                    </>
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <span>&nbsp;</span>
                </Row>
                <Row>
                    <Col>
                        <h1 className="title">Merchants</h1>
                        <hr />
                        <div>&nbsp;</div>
                        <Link className="nav-link" to="/merchants/add">
                            <span className="boxed btnStyle ptHover"/*href="/doplnky"*/>+</span>
                        </Link>
                        <div>&nbsp;</div>
                        <Table className="boxed">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Coordinates [x, y]</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (myMerchants.length !== 0)
                                        ? myMerchants.map((merch) => <tr key={merch.id}><td>{merch.data.properties.title}</td><td>{merch.data.properties.description}</td><td>[{merch.data.geometry.coordinates[0]}, {merch.data.geometry.coordinates[1]}]</td><td><Link className="navRemoveUnderscoreInLinkA" to={"/merchants/edit/" + merch.id}><span className="boxed btnStyle ptHover">EDIT</span></Link><span className="boxed btnStyle ptHover">DEL</span></td></tr>)
                                        : <tr><td>not ok</td></tr>
                                }
                                {
                                    /*<tr>
                                            <td>dummy provozovna 1</td>
                                            <td>dummy place description 1</td>
                                            <td>80.1276, 67.1768</td>
                                            <td><span className="boxed">EDIT</span><span className="boxed">DEL</span></td>
                                    </tr>*/
                                }
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <h1 className="title">Eshops</h1>
                        <hr />
                        <div>&nbsp;</div>
                        <Link className="nav-link" to="/eshops/add">
                            <span className="boxed btnStyle ptHover"/*href="/doplnky"*/>+</span>
                        </Link>
                        <div>&nbsp;</div>
                        <Table className="boxed">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Url</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (eshopsCZ.length !== 0)
                                        ? eshopsCZ.map((eshop) => <tr key={eshop.id}><td>{eshop.data.name}</td><td>{eshop.data.description}</td><td>{eshop.data.url}</td><td><Link className="navRemoveUnderscoreInLinkA" to={"/eshops/edit/" + eshop.id}><span className="boxed btnStyle ptHover">EDIT</span></Link><span className="boxed btnStyle ptHover">DEL</span></td></tr>)
                                        : <tr><td>not ok</td></tr>

                                }
                                {
                                    /*<tr>
                                        <td>dummy eshop 1</td>
                                        <td>dummy pridany 1</td>
                                        <td>www.dummyeshop1.cz</td>
                                        <td><span className="boxed">EDIT</span><span className="boxed">DEL</span></td>
                                    </tr>*/
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container >
        </>
    );
}
export default Dashboard;