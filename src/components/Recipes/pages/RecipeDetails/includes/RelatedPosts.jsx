import React, { Component } from 'react'

// styles
import '../../../styles/recipes-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

// images
import relatedPostImg1 from 'assets/images/related-posts/img1.jpg'
import relatedPostImg2 from 'assets/images/related-posts/img2.jpg'
import relatedPostImg3 from 'assets/images/related-posts/img3.jpg'

export default class RelatedPosts extends Component {
    render() {
        return (
            <section id="recipe-details" className="ST_def-pad-TB st-bg-slate">
                <Container>
                    <Row className="recipe-details">
                        <Col xs={12} className="st-heading-wrapper text-center mb-3 mb-lg-5">
                            <p className="st-heading heading-sm font-family-secondary-bold mb-3">Related Post</p>
                        </Col>

                        {/* item */}
                        <Col xs={12} md={4} className="item mb-2 mb-md-0">
                            <a href="#" className="inner text-decoration-none st-text-light">
                                {/* img sec */}
                                <div className="img-sec position-relative">
                                    <Image src={relatedPostImg1} fluid />
                                    <div className="date position-absolute st-bg-primary text-white px-2 py-1 font-size-14">
                                        <p>Dec 24 2021</p>
                                    </div>
                                </div>

                                {/* text sec */}
                                <div className="text-sec position-relative mt-3 mt-lg-4">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">MUTTON ROLL</p>
                                    <div className="desc">
                                        Curd and mutton are rich in protein. Cucumber is low in calories and rich in minerals potassium and magnesium; also has a high water content that cools the body and also aids in weight loss.
                                    </div>
                                </div>
                            </a>
                        </Col>

                        {/* item */}
                        <Col xs={12} md={4} className="item mb-2 mb-md-0">
                            <a href="#" className="inner text-decoration-none st-text-light">
                                {/* img sec */}
                                <div className="img-sec position-relative">
                                    <Image src={relatedPostImg2} fluid />
                                    <div className="date position-absolute st-bg-primary text-white px-2 py-1 font-size-14">
                                        <p>Dec 24 2021</p>
                                    </div>
                                </div>

                                {/* text sec */}
                                <div className="text-sec position-relative mt-3 mt-lg-4">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">BAKED FISH</p>
                                    <div className="desc">
                                        Fish is among the healthiest foods on the planet. Fish is the best lean protein meat that can be consumed in any form. It is loaded with important nutrients, such as protein and vitamin D. Intake of fish rich in omega-3 fat is associated with
                                    </div>
                                </div>
                            </a>
                        </Col>

                        {/* item */}
                        <Col xs={12} md={4} className="item mb-2 mb-md-0">
                            <a href="#" className="inner text-decoration-none st-text-light">
                                {/* img sec */}
                                <div className="img-sec position-relative">
                                    <Image src={relatedPostImg3} fluid />
                                    <div className="date position-absolute st-bg-primary text-white px-2 py-1 font-size-14">
                                        <p>Dec 24 2021</p>
                                    </div>
                                </div>

                                {/* text sec */}
                                <div className="text-sec position-relative mt-3 mt-lg-4">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">CHICKEN KEBAB</p>
                                    <div className="desc">
                                        Chicken kebab is delicious and easy to prepare. Chicken thigh is a good source of lean protein. The spices used in this kebab like garlic cloves, ginger and cinnamon provide the necessary nutrients and taste and also provides anti-inflammatory properties as well.
                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
