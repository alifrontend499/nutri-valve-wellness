import React, { Component } from 'react'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

import aboutPageMailImg from 'assets/images/page-about/main-left-img.jpg'
import sec2Img1 from 'assets/images/page-about/sec2-img1.jpg'
import sec2Img2 from 'assets/images/page-about/sec2-img2.jpg'
import sec2Img3 from 'assets/images/page-about/sec2-img3.jpg'

export default class AboutMain extends Component {
    render() {
        return (
            <section id="page-about-main" className="ST_def-pad-TB">
                <Container>
                    <Row className="page-about-main">
                        {/* lt-sec */}
                        <Col xs={12} md={4} className="lt-sec">
                            <Image src={aboutPageMailImg} fluid />
                        </Col>

                        {/* rt-sec */}
                        <Col xs={12} md={8} className="rt-sec mt-3 mt-md-0">
                            <div className="inner">
                                {/* heading */}
                                <div className="st-heading-wrapper mb-3 mb-lg-4">
                                    <p className="st-line-heading line-secondary d-inline-block font-family-primary-bold st-text-secondary position-relative mb-2">About Us</p>
                                    <p className="st-heading heading-sm font-family-sec font-family-secondary-bold">
                                        {/* Dr. Nurvi Kanani */}
                                        About Company Info
                                    </p>
                                </div>

                                <p className="desc font-size-17 st-text-gray mb-3">
                                    Influenced by the dream to improve maximum lives with good health and food, Dr Nurvi pursued “Post-Graduation in Clinical Nutrition” and “Obesity Management”. To gain excellence in her field she further specialized herself in “Bachelors in Yogic Science and Naturopathy” followed by MD in Alternative Medicines which gave her immense knowledge about medical and alternative approaches to improve an individual’s health.
                                </p>
                                <p className="desc font-size-17 st-text-gray mb-3">
                                    She closely worked in the field of food industry & restaurant chains. She has been highly experience in the field of nutrition and dietetics as she had worked with one of the best gym, hospital and chain of clinics and helped countless amount of people to overcome diabetes, infertility and hormonal imbalance in women, pre-natal and post-natal diets, thyroid, kidney & liver diseases, cancer and obesity.
                                </p>
                                <p className="desc font-size-17 st-text-gray mb-3">
                                    She further flourished herself as a young and renowned nutritionist in wellness industry after creating nutrivalvewellness.com which is now helping more than 10,000+ people globally to manage their weight and fight all kinds of medical conditions.
                                </p>
                                <p className="desc font-size-17 st-text-gray mb-3">
                                    The online customized diet plans, recipes, various guides are being appreciated by all our clients globally and by many institutions.
                                </p>

                            </div>
                        </Col>

                        {/* ct-sec */}
                        <Col xs={12} className="ct-sec mt-3 mt-lg-5">
                            <div className="inner">
                                <p className="desc font-size-18 font-weight-800 st-text-dark mb-3">
                                    Know Dr. Nurvi’s Weight Loss Journey!
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    I grew up in a joint family loving and being passionate about food since my childhood. As a child I was never skinny especially since my teenage or early college days. At that time, I never paid much attention on my weight as it did not make me look bulky. Also, during that period my weight was manageable and never went up on scale due to my high activity schedules, sports and busy schedule till std X.
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    It was the time, when I entered college soon, I had put on few more kilos and looked a bit bulgy, I thought I could easily drop back as my body did not show any major signs and alarm. Hence, I got extremely busy with my academics and never thought of losing weight right away.
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    On entering 20’s, while pursuing my graduation I started gaining lot of weight and went from 65 kgs to 75 kgs in a very short span and I had severe mood swings, food cravings for salty and spicy food, had too much of hairfall and irregular menses as well. I even got into a habit of eating lots of ice cream and chocolates and later ended up feeling guilty.
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    Just a year after, at 21 my menstrual cycle had gone all messed and at that point of time I got detected with hypothyroidism and PCOS. I was quite depressed after knowing it and started to study about it in detail. This was extremely difficult phase of my life as I had medical disorders and weighed more than 120 kg
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    I once again rejoined my courage and promised myself to lose weight. I started to choose healthy meals and daily exercises like walking, dancing and yoga.
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    During my post-graduation, being in the field of nutrition I started myself with a proper diet and started eating my meals in correct portions sizes. Also, followed a regular exercise and home workouts and learnt how I could control my cravings and switched to healthier options.
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    To my surprise, I was shedding more than I ever expected. Within 6 months, I was able to move back to 70 kgs but my worry for PCOS continued. Hence, I studied medical further so I could cure PCOS and metabolic disorders. I further lost more weight and I defeated thyroid and PCOS.
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    Shortly, I started working with one of the best hospitals in Mumbai and as I was busy consulting various people and got into the insights of their stressed lives and effect it had on their health. Hence, I realized that a practical diet plan will be best considering their age, activity levels, body parameters, work patterns, lifestyles, food habits and keeping their medical conditions such as diabetes, high blood pressure, cholesterol, fatty liver, gout and arthritis and many other medical issues in mind. So, with further R&D studied various cultures and their food habits and developed health meal plans, recipes and guide making them an important part of our programs.
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    My entire journey from being highly obese with PCOS and hypothyroidism to weight loss and defeating PCOS and Thyroid panned over 9 years with intense R&D and I discovered various guides such as PCOS guides, Diabetes and other medical guides, Restaurant Guide, Alcohol guide, Exercise guide, and maintenance guide and these are happily used by our clients globally.
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    After working closely with executive and business professionals I even discovered Airport and Travel, Party, Festivals and Function Guides, etc.
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    Every client’s journey at Nutrivalve Wellness is an immeasurable experience for me and my team. I understand every client’s story and what it means to achieve your target. It might not look easy but when you achieve it, it’s all worth it.
                                </p>
                                <p className="desc font-size-17 st-text-light mb-3">
                                    I do eat outside, have irregular meal patterns, enjoy parties and cheat at times but I follow smart eating and stick to all the tools and guides.
                                    I also believe that no one can eat special diet foods all their life, a more practical and doable approach works best.
                                </p>
                            </div>
                        </Col>

                    </Row>

                    <Row className="page-about-main-sec2 mt-3 mt-lg-5">
                        {/* item */}
                        <Col xs={12} md={4} className="item mb-3 mb-md-0">
                            <div className="inner d-flex border px-2 py-3">
                                <div className="img-sec">
                                    <Image src={sec2Img1} fluid height={70} width={70} />
                                </div>
                                <div className="text-sec media-body pl-3">
                                    <p className="head text-capitalize font-family-secondary-medium font-size-24 mb-2">our mission</p>
                                    <p className="desc st-text-gray">
                                        With the help of various plans, to leads a healthy life.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        {/* item */}
                        <Col xs={12} md={4} className="item mb-3 mb-md-0">
                            <div className="inner d-flex border px-2 py-3">
                                <div className="img-sec">
                                    <Image src={sec2Img2} fluid height={70} width={70} />
                                </div>
                                <div className="text-sec media-body pl-3">
                                    <p className="head text-capitalize font-family-secondary-medium font-size-24 mb-2">our vision</p>
                                    <p className="desc st-text-gray">
                                        We strive to reduce pain caused due to malnutrition.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        {/* item */}
                        <Col xs={12} md={4} className="item">
                            <div className="inner d-flex border px-2 py-3">
                                <div className="img-sec">
                                    <Image src={sec2Img3} fluid height={70} width={70} />
                                </div>
                                <div className="text-sec media-body pl-3">
                                    <p className="head text-capitalize font-family-secondary-medium font-size-24 mb-2">our history</p>
                                    <p className="desc st-text-gray">
                                        From the past a 25 years, we're into achieving our goal.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
