import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import { account_sponsors } from '../const/const'

export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: 0,
      winner: 0,
      loading: false,
      winner1: false,
      winner2: false,
      winner3: false,
      winner4: false,
      winner5: false,
      modal_num1: null,
      modal: false,
      modal_numner: 0,

      bgAmin: true,
      cubeAnim: true,
      cube2Amin: true,
      img1Anim: false,
      img2Anim: false,
      img3Anim: false,
      img4Anim: false,
      checker: true,
      userAnim: false,

      data: this.props.data,
    }
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  loadernumber() {
    this.setState({ modal_numner: this.randomInteger(0, 9999) })
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 9999) })
    }, 190)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 99000) })
    }, 290)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 999) })
    }, 390)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 116000) })
    }, 490)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 999) })
    }, 590)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 116000) })
    }, 690)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 99) })
    }, 790)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 999) })
    }, 890)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 999) })
    }, 990)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 999) })
    }, 1090)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 116000) })
    }, 1190)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 400) })
    }, 1290)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 99000) })
    }, 1390)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 100) })
    }, 1490)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 116000) })
    }, 1590)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 10000) })
    }, 1690)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 999) })
    }, 1790)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 99) })
    }, 1890)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 9999) })
    }, 1990)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 116000) })
    }, 2090)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 10000) })
    }, 2190)
    setTimeout(() => {
      this.setState({ modal_numner: this.randomInteger(0, 116000) })
    }, 2290)
    setTimeout(() => {
      this.setState({ user_numner: this.state.data[this.props.next].number })
      this.setState({ user_image: this.state.data[this.props.next].image })
      this.setState({ user_name: this.state.data[this.props.next].name })

      this.setState({ modal_numner: this.state.data[this.props.next].number })
      this.setState({ modal_name: this.state.data[this.props.next].name })
      this.setState({ modal_image: this.state.data[this.props.next].image })

      this.setState({ modal_follow: this.state.data[this.props.next].follow })
      this.setState({ bottom: true })
      this.props.opened(this.props.i)
      this.setState({ checker: true })

      this.setState({
        cubeAnim: false,
        cube2Amin: false,
        img1Anim: true,
        img2Anim: true,
        img3Anim: true,
        img4Anim: true,
        userAnim: true,
      })
      this.props.nextUser()
    }, 2390)
    setTimeout(() => {
      this.setState({
        modal: false,
        bgAmin: true,
        cubeAnim: true,
        cube2Amin: true,
        img1Anim: false,
        img2Anim: false,
        img3Anim: false,
        img4Anim: false,
        checker: true,
        userAnim: false,
      })
      this.setState({ modal_numner: undefined })
      this.setState({ modal_name: undefined })
      this.setState({ modal_image: undefined })
    }, 3990)

    setTimeout(() => {
      this.setState({
        checker: false,
      })
    }, 10000)
  }

  openRangom() {
    this.setState({ modal: true })

    this.loadernumber()
    this.props.opened(this.props.i)
  }

  openRangom2() {
    this.setState({ modal: true })

    this.loadernumber()
  }

  loader() {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 4000)
  }

  render() {
    return (
      <div style={{ marginBottom: '1.5rem' }}>
        <div className="base-winner">
          {this.state.user_name == undefined ? (
            <div className="base-winner__top">
              <div className="base-winner__top-wrapper">
                <div className="base-winner__number">{this.props.i}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="base-winner__cup"
                >
                  <use xlinkHref="#ico-cup-color" />
                </svg>
                <span className="base-winner__border" />
                <div className="_winner user _label base-winner__user">
                  <div className="user__picture">
                    <img
                      src="https://youtogift.com/img/user-default.0f8e789e.jpeg"
                      alt="img"
                      className="user__img"
                    />
                  </div>
                  <div className="user__main">
                    <span className="user__name">Сейчас мы его узнаем</span>
                  </div>
                </div>
                {/**/}
              </div>
              <div className="base-winner__top-info">
                {/**/}
                <button
                  onClick={() => this.openRangom()}
                  className="_left-auto base-winner__btn btn _blue"
                >
                  Выбрать победителя
                </button>
              </div>
            </div>
          ) : (
            <div className="base-winner__top">
              <div className="base-winner__top-wrapper">
                <div className="base-winner__number">{this.props.i}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="base-winner__cup"
                >
                  <use xlinkHref="#ico-cup-color" />
                </svg>
                <span className="base-winner__border" />
                <a href="#" className="_winner user _name base-winner__user">
                  <div className="user__picture">
                    <img
                      src={this.state.user_image}
                      alt="img"
                      className="user__img"
                    />
                  </div>
                  <div className="user__main">
                    <span className="user__name">{this.state.user_name}</span>
                  </div>
                </a>
                <span className="base-winner__win_number d-none d-md-flex">
                  №{this.state.user_numner}
                </span>
              </div>
              <div className="base-winner__top-info">
                <span className="base-winner__border _mod" />
                <span className="base-winner__win_number">
                  №{this.state.user_numner}
                </span>
                <button
                  onClick={() => this.openRangom2()}
                  className={`${
                    this.state.modal_name == undefined
                      ? '_left-auto base-winner__btn'
                      : 'base-winner__btn'
                  }  btn _blue`}
                >
                  Выбрать другого
                </button>
              </div>
            </div>
          )}
          {this.state.bottom == true ? (
            this.props.i == this.props.open ? (
              <div className="base-winner__bottom">
                <div className="base-winner__bottom-inner">
                  {this.state.modal_follow == null ? (
                    <div className="base-winner__sponsors">
                      {this.state.checker == true ? (
                        <div className="base-winner__sponsors-wrapper">
                          <div className="base-winner__sponsors-container">
                            <div className="base-winner__sponsors-text">
                              <b className="base-winner__sponsors-label _small _uppercase d-md-none">
                                Пользователь подписался на спонсоров:
                              </b>
                              <b className="base-winner__sponsors-label _small d-none d-md-flex">
                                подписался на:
                              </b>
                              {this.state.checker == true ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="base-winner__sponsors-loader loader"
                                >
                                  <use xlinkHref="#ico-pending" />
                                </svg>
                              ) : (
                                <div>
                                  <div className="base-winner__sponsors-description">
                                    <b
                                      className={
                                        this.state.modal_follow <
                                        account_sponsors
                                          ? '_yellow'
                                          : this.state.modal_follow ==
                                            account_sponsors
                                          ? '_green'
                                          : '_red'
                                      }
                                    >
                                      {this.state.modal_follow}
                                    </b>{' '}
                                    из <span>{account_sponsors}</span>
                                  </div>
                                  <div className="base-winner__sponsors-subtitle d-none d-md-flex">
                                    спонсоров
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="base-winner__sponsors-wrapper">
                          <div className="base-winner__sponsors-container">
                            <span className="base-winner__sponsors-closed">
                              Аккаунт закрыт
                            </span>
                          </div>
                          <button
                            disabled=""
                            className="base-winner__sponsors-btn btn _grad-blue disabled_bg"
                          >
                            <span className="d-md-none">Просмотреть</span>
                            <span className="d-none d-md-inline-flex">
                              Проверить
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="base-winner__sponsors">
                      <div className="base-winner__sponsors-wrapper">
                        <div className="base-winner__sponsors-container">
                          <div className="base-winner__sponsors-text">
                            <b className="base-winner__sponsors-label _small _uppercase d-md-none">
                              Пользователь подписался на спонсоров:
                            </b>
                            <b className="base-winner__sponsors-label _small d-none d-md-flex">
                              подписался на:
                            </b>
                            {this.state.checker == true ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="base-winner__sponsors-loader loader"
                              >
                                <use xlinkHref="#ico-pending" />
                              </svg>
                            ) : (
                              <div>
                                <div className="base-winner__sponsors-description">
                                  <b
                                    className={
                                      this.state.modal_follow < account_sponsors
                                        ? '_yellow'
                                        : this.state.modal_follow ==
                                          account_sponsors
                                        ? '_green'
                                        : '_red'
                                    }
                                  >
                                    {this.state.modal_follow}
                                  </b>{' '}
                                  из <span>{account_sponsors}</span>
                                </div>
                                <div className="base-winner__sponsors-subtitle d-none d-md-flex">
                                  спонсоров
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <button
                          className={`base-winner__sponsors-btn btn _grad-blue ${
                            this.state.checker == true ? 'disabled_bg' : null
                          }`}
                        >
                          <span className="d-md-none">Просмотреть</span>
                          <span className="d-none d-md-inline-flex">
                            Проверить
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <button className="_active base-winner__btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#arrow-double-bottom" />
                  </svg>{' '}
                  проверить условия{' '}
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#arrow-double-bottom" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="base-winner__bottom">
                {/**/}
                <button className="base-winner__btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#arrow-double-bottom" />
                  </svg>{' '}
                  проверить условия{' '}
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#arrow-double-bottom" />
                  </svg>
                </button>
              </div>
            )
          ) : null}
        </div>
        {this.state.modal ? (
          <div className="modals-container">
            <div
              className="vfm vfm--inset vfm--fixed"
              data-v-2836fdb5=""
              style={{
                zIndex: 1000,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                position: 'fixed',
              }}
            >
              <div
                className="vfm__overlay vfm--overlay vfm--absolute vfm--inset"
                data-v-2836fdb5=""
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  position: 'absolute',
                }}
              />
              <div
                className="vfm__container vfm--absolute vfm--inset vfm--outline-none modal winner-modal _full-modal _md"
                aria-expanded="true"
                role="dialog"
                aria-modal="true"
                tabIndex={-1}
                data-v-2836fdb5=""
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <div
                  className="vfm__content modal__inner winner-modal__inner"
                  data-v-2836fdb5=""
                >
                  <div
                    className="modal__inner winner-modal__inner"
                    data-v-2836fdb5-s=""
                  >
                    {/**/}
                    <div
                      className="modal-universal _mobile-2 winner-modal__content"
                      data-v-2836fdb5-s=""
                    >
                      <div className="modal-universal__top">
                        {/**/}
                        <h3 className="modal-universal__title">
                          ГЕНЕРАЦИЯ СЛУЧАЙНОГО ЗНАЧЕНИЯ
                        </h3>
                      </div>
                      <div className="modal-universal__center">
                        {this.state.cubeAnim ? (
                          <img
                            src="https://youtogift.com/img/cubes-01.891d2f8b.svg"
                            alt="img"
                            className=" winner-modal__img _img-3"
                          />
                        ) : null}
                        {this.state.cube2Amin ? (
                          <img
                            src="https://youtogift.com/img/cubes-02.7963e9ab.svg"
                            alt="img"
                            className=" winner-modal__img _img-4"
                          />
                        ) : null}
                        {this.state.img2Anim ? (
                          <img
                            className="winner-modal__img _img-1"
                            src="https://youtogift.com/img/random-02.57bed5b3.png"
                            alt="img"
                          />
                        ) : null}

                        {this.state.img1Anim ? (
                          <img
                            className="winner-modal__img _img-2"
                            src="https://youtogift.com/img/random-05.fcc0e7d1.png"
                            alt="img"
                          />
                        ) : null}
                        {this.state.img3Anim ? (
                          <img
                            src="https://youtogift.com/img/detonation_of_bomb.ec003e32.gif?v1660614109042"
                            alt="img"
                            className="winner-modal__user-detonation"
                          />
                        ) : null}
                        <div className="winner-modal__bg-wrap d-none d-md-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="winner-modal__bg-svg"
                          >
                            <use xlinkHref="#ico-draw" />
                          </svg>
                        </div>
                        <div className="winner-modal__wrapper">
                          <div className="winner-modal__bg-wrap d-md-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="winner-modal__bg-svg"
                              style={{
                                animationPlayState:
                                  this.state.img4Anim == true
                                    ? 'paused'
                                    : 'running',
                              }}
                            >
                              <use xlinkHref="#ico-draw" />
                            </svg>
                          </div>
                          <div className="winner-modal__bg">
                            {this.state.userAnim ? (
                              <div className="winner-modal__user-wrap animate">
                                <div className="user winner-modal__user _big">
                                  <div className="user__picture">
                                    <img
                                      src={this.state.modal_image}
                                      alt="img"
                                      className="user__img"
                                    />
                                  </div>
                                  <div className="user__main">
                                    <span className="user__name">username</span>
                                  </div>
                                </div>
                                <div className="winner-modal__user-name">
                                  {this.state.modal_name}
                                </div>
                              </div>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="winner-modal__svg-1"
                              >
                                <use xlinkHref="#ico-question" />
                              </svg>
                            )}

                            <div className="_medium winner-modal__result">
                              <div
                                className={`winner-modal__result-number ${
                                  this.state.userAnim ? 'animate' : null
                                } `}
                              >
                                {this.state.modal_numner}
                              </div>
                            </div>
                          </div>
                        </div>

                        {this.state.modal_name == undefined ? (
                          <audio
                            autoPlay="true"
                            src="https://youtogift.com/media/rotation.83463d9c.wav"
                          />
                        ) : (
                          <audio
                            autoPlay="true"
                            src="https://youtogift.com/media/win.7f9d7c63.mp3"
                          />
                        )}
                        {/**/}
                        {/**/}
                      </div>
                    </div>
                  </div>
                  {this.state.img4Anim ? (
                    <img
                      src="https://youtogift.com/img/confetti.d941fdf6.svg"
                      alt="img"
                      className="winner-modal__confetti"
                      data-v-2836fdb5-s=""
                    />
                  ) : null}
                  {/*v-if*/}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
