import { useCallback } from "react";
import "./WwwmentoringClubcomByHtml.css";
const WwwmentoringClubcomByHtml = () => {
  const onFrameClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frame']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="wwwmentoring-clubcom-by-html">
      <div className="footer">
        <div className="list">
          <div className="item">
            <div className="link-donate">{`Donate & Support`}</div>
          </div>
          <div className="item1">
            <div className="link-donate">Partners</div>
          </div>
          <div className="item2">
            <div className="link-donate">{`Press & Media`}</div>
          </div>
          <div className="item3">
            <div className="link-donate">About us</div>
          </div>
          <div className="itemmargin">
            <div className="link-donate">Cookie Policy</div>
          </div>
          <div className="itemmargin1">
            <div className="link-donate">Privacy policy</div>
          </div>
          <div className="itemmargin2">
            <div className="link-donate">Imprint</div>
          </div>
        </div>
        <div className="divd-flex">
          <div className="divcol-md-4">
            <img
              className="link-apple-icon-114x114png"
              alt=""
              src="/link--appleicon114x114png@2x.png"
            />
            <div className="spanmb-3">
              <div className="the-mentoring-club">
                © 2020-2023 The Mentoring Club gUG
              </div>
            </div>
          </div>
          <div className="list1">
            <div className="itemmargin3">
              <div className="symbol"></div>
            </div>
            <div className="itemmargin3">
              <div className="symbol"></div>
            </div>
            <div className="itemmargin3">
              <div className="symbol"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame">
        <div className="header">
          <div className="nav">
            <div className="button-toggle-navigation">
              <div className="symbol3"></div>
            </div>
            <div className="divd-inline-block">
              <div className="link">
                <img
                  className="lw-tmcpng-icon"
                  alt=""
                  src="/lw-tmcpng@2x.png"
                />
                <div className="frame1">
                  <div className="the-mentoring-club1">THE MENTORING CLUB</div>
                </div>
              </div>
            </div>
            <div className="divnavbar-nav">
              <div className="list2">
                <div className="item4">
                  <div className="link-find">Find a Mentor</div>
                </div>
                <div className="item5">
                  <div className="link-find">Discover our Library</div>
                </div>
                <div className="item6">
                  <div className="link-find">{`Talks & Events`}</div>
                </div>
                <div className="item7">
                  <div className="link-find">Sign Up Now!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="section">
            <div className="divrow">
              <div className="divcol-lg-4">
                <div className="divinfo">
                  <div className="heading-4">Start your registration.</div>
                  <div className="p">
                    <div className="the-mentoring-club-container">
                      <p className="pay-forward-what">
                        The Mentoring Club is for individuals, who either seek
                        to
                      </p>
                      <p className="pay-forward-what">
                        pay forward what their mentors gave them and for those
                      </p>
                      <p className="pay-forward-what">
                        who have the intrinsic motivation to give to others. Our
                      </p>
                      <p className="pay-forward-what">
                        mentors share, support and help with no strings
                        attached.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divcol-lg-8">
                <div className="form">
                  <header className="frame2" onClick={onFrameClick}>
                    <div className="divrowmargin">
                      <div className="divrow1">
                        <div className="divcol" />
                        <div className="divcol1">
                          <div className="button">
                            <div className="continue">Continue</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="anchor-frame" data-scroll-to="frame" />
                  </header>
                  <div className="frame3">
                    <div className="divcol-md-12margin">
                      <div className="list3">
                        <div className="item-link3">
                          <b className="choose-account-types">
                            Choose account type(s):
                          </b>
                        </div>
                        <div className="item-link4">
                          <div className="symbol4"></div>
                          <b className="mentor"> Mentor</b>
                        </div>
                        <div className="item-link5">
                          <div className="symbol5"></div>
                          <b className="mentee"> Mentee</b>
                        </div>
                      </div>
                    </div>
                    <div className="divcol-md-12margin1">
                      <div className="divcol-md-12">
                        <b className="the-mentoring-club">
                          Your email address:
                        </b>
                        <div className="input">
                          <div className="divplaceholder">
                            <div className="your-email-address">
                              your email address
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame4">
                    <div className="divcol-6margin">
                      <div className="divcol-6">
                        <b className="the-mentoring-club">Password:</b>
                        <div className="input1">
                          <div className="divplaceholder1">
                            <div className="password">password</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divcol-6margin1">
                      <div className="divcol-6">
                        <b className="the-mentoring-club">Confirm password:</b>
                        <div className="input2">
                          <div className="divplaceholder2">
                            <div className="password">confirm password</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame5">
                    <div className="divcol-md-12margin2">
                      <div className="divcol-md-121">
                        <b className="strong-disclaimer">Disclaimer:</b>
                        <div className="p1">
                          <div className="this-is-a-container">
                            <p className="pay-forward-what">
                              This is a non-commercial project provided by The
                              Mentoring Club gUG - a non-profit organization
                              registered in Germany. Mentors listed on this
                              webpage offer their time
                            </p>
                            <p className="pay-forward-what">
                              voluntarily and without any compensation from The
                              Mentoring Club gUG or the individuals booking and
                              taking a session (called: „mentees“). Similarly,
                              individuals who book a
                            </p>
                            <p className="pay-forward-what">
                              session with a mentor do not have any commercial
                              relationship with the mentor or The Mentoring Club
                              gUG. All interaction(s) between a mentor and a
                              mentee is (are)
                            </p>
                            <p className="pay-forward-what">
                              mutually accepted between those two parties by
                              offering (mentor) and booking (mentee) a mentoring
                              session. There is no legal obligation for neither
                              the mentor, the mentee
                            </p>
                            <p className="pay-forward-what">
                              nor The Mentoring Club gUG and its founders that
                              can be inferred by any interaction that takes
                              place between mentors and mentees. The extent to
                              which mentees act on the
                            </p>
                            <p className="pay-forward-what">
                              suggestions made by mentors is fully on them,
                              there is no reliability or accountability for what
                              happens after a mentoring session by any of the
                              mentors participating in the
                            </p>
                            <p className="pay-forward-what">
                              Mentoring Club. By creating an account with us you
                              agree to receive emails and/or newsletter from us
                              as well as allow us to get in contact with you
                              regarding your mentoring
                            </p>
                            <p className="pay-forward-what">
                              {`session(s). By creating an account with us you agree with our `}
                              <span className="privacy-policy">
                                Privacy Policy
                              </span>
                              {` and `}
                              <span className="privacy-policy">
                                Cookie Policy
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="p2">
                          <div className="this-is-a-container">
                            {`Please read our `}
                            <span className="privacy-policy">
                              code of conduct for mentors
                            </span>
                            {` and our `}
                            <span className="privacy-policy">
                              code of conduct for mentees
                            </span>{" "}
                            before creating your profile.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divcol-md-12margin3">
                      <div className="divcol-md-122">
                        <div className="input3" />
                        <b className="label-yes">
                          Yes, I agree with the disclaimer and the Code of
                          Conduct.
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WwwmentoringClubcomByHtml;
