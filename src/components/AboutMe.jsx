import React from 'react';
import styles from '@styles/AboutMe.module.scss';

export default function AboutMe() {
  const gymImg = 'https://images.pexels.com/photos/669585/pexels-photo-669585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const thaiImg = 'https://images.pexels.com/photos/7045391/pexels-photo-7045391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const flightImg = 'https://images.pexels.com/photos/12202235/pexels-photo-12202235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const integrationImg = 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const leadershipImg = 'https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const respectImg = 'https://images.pexels.com/photos/7551760/pexels-photo-7551760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const learningImg = 'https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <div className={styles.aboutme}>
      <div className={styles['aboutme-container']}>
        <div className={styles.title}>
          <h2>Hobbies</h2>
        </div>
        <div className={styles['info-container']}>
          <p className={styles['flip-card']}>
            <div className={styles['flip-card-inner']}>
              <div className={styles['text-container']}>
                <span>
                  Gym
                </span>

                <img src={gymImg} />
              </div>

              <div className={styles['flip-card-back']}>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis in quisquam culpa doloribus distinctio dolore obcaecati eligendi corporis, hic iusto quis nisi veniam, beatae
                  necessitatibus, nemo enim amet saepe consequuntur.
                </span>
              </div>
            </div>
          </p>

          <p className={styles['flip-card']}>
            <div className={styles['flip-card-inner']}>
              <div className={styles['text-container']}>
                <span>
                    Muay Thai
                </span>

                <img src={thaiImg} />
              </div>

              <div className={styles['flip-card-back']}>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis in quisquam culpa doloribus distinctio dolore obcaecati eligendi corporis, hic iusto quis nisi veniam, beatae
                  necessitatibus, nemo enim amet saepe consequuntur.
                </span>
              </div>
            </div>
          </p>
          <p className={styles['flip-card']}>
            <div className={styles['flip-card-inner']}>
              <div className={styles['text-container']}>
                <span>
                  Travels
                </span>

                <img src={flightImg} />
              </div>

              <div className={styles['flip-card-back']}>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis in quisquam culpa doloribus distinctio dolore obcaecati eligendi corporis, hic iusto quis nisi veniam, beatae
                  necessitatibus, nemo enim amet saepe consequuntur.
                </span>
              </div>
            </div>
          </p>
        </div>
        <div className={styles.title}>
          <h2>Culture</h2>
        </div>
        <div className={styles['info-container']}>
          <p className={styles['flip-card']}>
            <div className={styles['flip-card-inner']}>
              <div className={styles['text-container']}>
                <span>
                  Leadership
                </span>

                <img src={leadershipImg} />
              </div>

              <div className={styles['flip-card-back']}>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis in quisquam culpa doloribus distinctio dolore obcaecati eligendi corporis, hic iusto quis nisi veniam, beatae
                  necessitatibus, nemo enim amet saepe consequuntur.
                </span>
              </div>
            </div>
          </p>
          <p className={styles['flip-card']}>
            <div className={styles['flip-card-inner']}>
              <div className={styles['text-container']}>
                <span>
                  Integration
                </span>

                <img src={integrationImg} />
              </div>

              <div className={styles['flip-card-back']}>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis in quisquam culpa doloribus distinctio dolore obcaecati eligendi corporis, hic iusto quis nisi veniam, beatae
                  necessitatibus, nemo enim amet saepe consequuntur.
                </span>
              </div>
            </div>
          </p>
          <p className={styles['flip-card']}>
            <div className={styles['flip-card-inner']}>
              <div className={styles['text-container']}>
                <span>
                  Respect
                </span>

                <img src={respectImg} />
              </div>

              <div className={styles['flip-card-back']}>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis in quisquam culpa doloribus distinctio dolore obcaecati eligendi corporis, hic iusto quis nisi veniam, beatae
                  necessitatibus, nemo enim amet saepe consequuntur.
                </span>
              </div>
            </div>
          </p>
          <p className={styles['flip-card']}>
            <div className={styles['flip-card-inner']}>
              <div className={styles['text-container']}>
                <span>
                  Learning
                </span>

                <img src={learningImg} />
              </div>

              <div className={styles['flip-card-back']}>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis in quisquam culpa doloribus distinctio dolore obcaecati eligendi corporis, hic iusto quis nisi veniam, beatae
                  necessitatibus, nemo enim amet saepe consequuntur.
                </span>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
