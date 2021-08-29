import styles from "../../styles/Body.module.css";
import { Input, Row, Col} from "antd";
import {
    
    YoutubeOutlined,
    FacebookOutlined,
    InstagramOutlined,
    DribbbleOutlined,
    GitlabOutlined,
    MediumOutlined,
    BehanceOutlined,
    LinkedinOutlined,
    
  } from "@ant-design/icons";

export default function Link() {
  const gutter=16
    return (
        <div className={styles.card}>
        <div className={styles.cardTitle}>링크</div>

        <div className={styles.myRow}>
          <Row
            gutter={[gutter, gutter]}
            className={styles.antdRow}
            justify="space-around"
            align="left"
          >
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>Youtube</div>
              <Input
              id="youtubeInput"
                className={styles.input}
                placeholder="ex) https://www.youtube.com/channel/..."
                prefix={<YoutubeOutlined className={styles.icon} />}
              />
            </Col>
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>Facebook</div>
              <Input id="facebookInput"
                className={styles.input}
                placeholder="ex) https://facebook.com/..."
                prefix={<FacebookOutlined className={styles.icon} />}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.myRow}>
          <Row
            gutter={[gutter, gutter]}
            className={styles.antdRow}
            justify="space-around"
            align="left"
          >
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>Mastodon</div>
              <Input id="mastodonInput"
                className={styles.input}
                placeholder="ex) https://..."
                prefix={
                  <img
                    src="/svg/prefix/mastodon.svg"
                    width="14px"
                    className={styles.icon}
                  />
                }
              />
            </Col>
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>Twitch</div>
              <Input id="twitchInput"
                className={styles.input}
                placeholder="ex) https://www.twitch.tv/..."
                prefix={
                  <img
                    src="/svg/prefix/twitch.svg"
                    width="14px"
                    className={styles.icon}
                  />
                }
              />
            </Col>
          </Row>
        </div>
        <div className={styles.myRow}>
          <Row
            gutter={[gutter, gutter]}
            className={styles.antdRow}
            justify="space-around"
            align="left"
          >
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>Instagram</div>
              <Input id="instagramInput"
                className={styles.input}
                placeholder="ex) https://www.instagram.com/..."
                prefix={<InstagramOutlined className={styles.icon} />}
              />
            </Col>
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>Dribbble</div>
              <Input id="dribbbleInput"
                className={styles.input}
                placeholder="ex) https://www.dribbble.com/..."
                prefix={<DribbbleOutlined className={styles.icon} />}
              />
            </Col>
          </Row>
        </div>

        <div className={styles.myRow}>
          <Row
            gutter={[gutter, gutter]}
            className={styles.antdRow}
            justify="space-around"
            align="left"
          >
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>StackOverflow</div>
              <Input id="stackoverflowInput"
                className={styles.input}
                placeholder="ex) https://stackoverflow.com/users/..."
                prefix={
                  <img
                    src="/svg/prefix/stackoverflow.svg"
                    className={styles.icon}
                  />
                }
              />
            </Col>
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>GitLab</div>
              <Input id="gitlabInput"
                className={styles.input}
                placeholder="ex) https://gitlab.com/..."
                prefix={<GitlabOutlined className={styles.icon} />}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.myRow}>
          <Row
            gutter={[gutter, gutter]}
            className={styles.antdRow}
            justify="space-around"
            align="left"
          >
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>Medium</div>
              <Input id="mediumInput"
                className={styles.input}
                placeholder="ex) https://medium.com/@..."
                prefix={<MediumOutlined className={styles.icon} />}
              />
            </Col>
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>Behance</div>
              <Input id="behanceInput"
                className={styles.input}
                placeholder="ex) https://www.behance.net/channel/..."
                prefix={<BehanceOutlined className={styles.icon} />}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.myRow}>
          <Row
            gutter={[gutter, gutter]}
            className={styles.antdRow}
            justify="space-around"
            align="left"
          >
            <Col flex="1 1" span="24">
              <div className={styles.inputTitle}>LinkedIn</div>
              <Input id="linkedinInput"
                className={styles.input}
                placeholder="ex) https://www.linkedin.com/in/..."
                prefix={<LinkedinOutlined className={styles.icon} />}
              />
            </Col>
            <Col flex="1 1" span="24"></Col>
          </Row>
        </div>
      </div>
    )
}
