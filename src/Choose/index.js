import React, { Component } from 'react'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

class Choose extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      persent: 0,
      persent_style: 0,
      loading: true,
    }
  }

  loader() {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
    this.setState({ load: true })
    setInterval(() => {
      this.setState({ persent: this.state.persent + 1 })
    }, 4200)
    setInterval(() => {
      this.setState({ persent_style: this.state.persent_style + 3 })
    }, 12600)
    setTimeout(() => {
      this.props.history.push('/createoneclick/deciding-give/id1628308')
    }, 420 * 1000)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  render() {
    return (
      <main className="choose-winner page__main">
        {this.state.loading == true ? (
          <div className="preloader_block">
            <div className="preloader preloader-fixed">
              <div className="preloader__main">
                <div className="preloader__rect" />
                <div className="preloader__rect" />
                <div className="preloader__rect" />
                <div className="preloader__rect" />
              </div>
            </div>
          </div>
        ) : null}
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          {/**/}
          {/**/}
          {/**/}
          <div className="choose-winner__type-wrap">
            <div className="video-avd choose-winner__type-video">
              <svg xmlns="http://www.w3.org/2000/svg" className>
                <use xlinkHref="#ico-video-play" />
              </svg>
              <div className="video-avd__header d-sm-flex">
                <p>
                  <b>Посмотрите видео пример</b>
                </p>
                <button className="btn btn--default"> Видеоинструкция </button>
              </div>
              {/**/}
            </div>
            <div className="draw-config-give choose-winner__draw-config">
              <div className="draw-config-give__head">
                <div className="draw-config-give__item relative">
                  {/**/}
                  <h3 className="draw-config-give__item-title">
                    КОНКУРСНЫЙ АККАУНТ:
                  </h3>
                  <a
                    data-v-8f89b7d6
                    className="user"
                    verificated="true"
                    chanel_id
                  >
                    {/**/}
                    <div data-v-8f89b7d6 className="user__ava">
                      <img
                        data-v-8f89b7d6
                        src={require('../assets/1.png').default}
                        loading="lazy"
                        alt="rezer.aziz"
                      />
                    </div>
                    <div data-v-8f89b7d6 className="user__main">
                      <div
                        data-v-8f89b7d6
                        className="user__name user__name--bold"
                      >
                        {' '}
                        rezer.aziz{' '}
                      </div>
                      <div data-v-8f89b7d6 className="user__subscribe">
                        {' '}
                        40715 подписчиков{' '}
                      </div>
                    </div>
                  </a>
                  <ul className="draw-config-give__list">
                    <li className="draw-config-give__list-item">
                      <span>Спонсоров:</span>
                      <b>225</b>
                      <svg xmlns="http://www.w3.org/2000/svg" className>
                        <use xlinkHref="#ico-cash-bag" />
                      </svg>
                    </li>
                    <li className="draw-config-give__list-item">
                      <span>Участников:</span>
                      <b>40715</b>
                      <svg xmlns="http://www.w3.org/2000/svg" className>
                        <use xlinkHref="#ico-users" />
                      </svg>
                    </li>
                  </ul>
                </div>
                <div className="draw-config-give__item _conditions">
                  <h3 className="draw-config-give__item-title">
                    ПРОВЕРИТЬ УСЛОВИЯ:
                  </h3>
                  <div className="check-conditions">
                    <div className="check-conditions__list">
                      <div className="check-conditions__item">
                        <label className="check-conditions__el _disabled">
                          <input type="checkbox" disabled="disabled" />
                          <span className="check-conditions__el-inner">
                            <span className="check-conditions__el-checkbox">
                              <svg xmlns="http://www.w3.org/2000/svg" className>
                                <use xlinkHref="#ico-checkbox-filled" />
                              </svg>
                            </span>
                            <span className="check-conditions__el-inner-ico">
                              <svg xmlns="http://www.w3.org/2000/svg" className>
                                <use xlinkHref="#ico-loupe" />
                              </svg>
                            </span>
                          </span>
                          <span className="check-conditions__el-name">
                            Открытый аккаунт
                          </span>
                        </label>
                      </div>
                      <div className="check-conditions__item">
                        <label className="check-conditions__el _disabled">
                          <input type="checkbox" disabled="disabled" />
                          <span className="check-conditions__el-inner">
                            <span className="check-conditions__el-checkbox">
                              <svg xmlns="http://www.w3.org/2000/svg" className>
                                <use xlinkHref="#ico-checkbox-filled" />
                              </svg>
                            </span>
                            <span className="check-conditions__el-inner-ico">
                              <svg xmlns="http://www.w3.org/2000/svg" className>
                                <use xlinkHref="#ico-users" />
                              </svg>
                            </span>
                          </span>
                          <span className="check-conditions__el-name">
                            Подписка
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {this.state.load == true ? (
                <div className="draw-config-give__body">
                  <div className="loading-draw-data choose-winner__loading">
                    <h3 className="loading-draw-data__title">
                      сбор и обработка данных
                    </h3>
                    <div className="loading-draw-data__progress">
                      <div
                        className="loading-draw-data__progress-inner"
                        style={{ width: this.state.persent_style + '%' }}
                      />
                      <div className="loading-draw-data__progress-val">
                        <span>{this.state.persent}</span>%{' '}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="draw-config-give__body">
                  <div className="draw-config-give__item">
                    <h3 className="draw-config-give__item-title">
                      ПРИЗОВЫХ МЕСТ:
                    </h3>
                    <div className="draw-config-give__item-input form-element">
                      <input
                        value={this.state.num}
                        onFocus={() => this.setState({ num: '' })}
                        onChange={(e) => this.setState({ num: e.target.value })}
                        type="number"
                        className="form-element__input"
                      />
                    </div>
                    <a
                      href="#"
                      onClick={() => this.loader()}
                      className="draw-config-give__btn-start btn btn--gradient"
                    >
                      {' '}
                      Старт{' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="btn__ico-arrows"
                      >
                        <use xlinkHref="#ico-arrows" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollAnimation>
      </main>
    )
  }
}

export default withRouter(Choose)
