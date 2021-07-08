import React, { Component } from 'react'

// styles
import '../../../styles/recipes-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image,
    Spinner
} from 'react-bootstrap'

// router
import { Link } from 'react-router-dom'

// images
// no data found image
import noImgFound from 'assets/images/no-image-found-logo.png'

// redux
import { connect } from 'react-redux';

// recipes api
import { getRecipes } from 'utlis/apis/API_recipes'

// moment
import Moment from 'react-moment';

// helpers
import { stripHTML } from 'utlis/helpers/Helpers_common'

class RelatedPosts extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            loading: false,
            currentPage: 1,

            recipes: [],
        }
    }

    componentDidMount() {
        this.setState({
            loading: true,
        })
        // GETTING RECIPES DATA
        getRecipes(this.props.commonToken, this.state.currentPage).then(res => {
            const recipesData = [...res.data.items]
            recipesData.sort(() => Math.random() - 0.5)
            this.setState({
                recipes: recipesData.slice(0, 3),
                loading: false
            })
        }).catch(err => {
            console.log('error occured ', err.message)
        })
    }



    render() {
        const { recipes, loading } = this.state
        return (
            <section id="recipe-details" className="ST_def-pad-TB st-bg-slate">
                <Container>
                    <Row className="recipe-details">
                        <Col xs={12} className="st-heading-wrapper text-center mb-3 mb-lg-5">
                            <p className="st-heading heading-sm font-family-secondary-bold mb-3">More Recipes</p>
                        </Col>
                        {
                            loading ? (
                                <Col xs={12} className="loading text-center mb-3">
                                    <Spinner animation="border" />
                                </Col>
                            ) : (
                                <React.Fragment>
                                    {
                                        /* item */
                                        recipes?.length && recipes.map(item => (
                                            <Col key={item.id} xs={12} md={4} className="item mb-3 mb-md-2">
                                                <Link to={'/recipe-details/' + item.slug} className="inner text-decoration-none st-text-light">
                                                    {/* img sec */}
                                                    <div className="img-sec position-relative">
                                                        {
                                                            (item.coverImage === null) ? (
                                                                <div className="img-sec text-center overflow-hidden bg-white">
                                                                    <Image src={noImgFound} fluid style={{ maxHeight: '100%' }} />
                                                                </div>
                                                            ) : (
                                                                <div className="img-sec text-center overflow-hidden">
                                                                    <Image src={item.fullUrlImage} fluid />
                                                                </div>
                                                            )
                                                        }
                                                        <div className="date position-absolute st-bg-primary text-white px-2 py-1 font-size-14">
                                                            {<Moment format="DD MMM YYYY">{item?.createdAt?.date}</Moment>}
                                                        </div>
                                                    </div>

                                                    {/* text sec */}
                                                    <div className="text-sec position-relative mt-3 mt-lg-4">
                                                        <p className="head st-heading heading-xs font-family-secondary-medium mb-2">{item.title}</p>
                                                        <div className="desc">
                                                            {stripHTML(item.content)}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                        ))
                                    }
                                </React.Fragment>
                            )
                        }

                    </Row>
                </Container>
            </section>
        )
    }
}


const getDataFromStore = state => {
    return {
        commonToken: state.auth.commonToken,
    };
}

export default connect(getDataFromStore, null)(RelatedPosts)