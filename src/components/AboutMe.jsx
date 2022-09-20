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
                Being in shape is the best way to deal with day-to-day problems. A healthy body allows us to develop our ability to solve difficult problems in the most efficient and clean way possible.
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
                Muay Thai is a mixed martial art that requires a lot of discipline, focused people also require great discipline to achieve their goals, so training helps maintain perseverance and resilience in the face of great challenges.
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
                Traveling is part of those people who want to be up to date with the cultures of what lies beyond our borders, knowing new places keeps us aware that there are no limits to our dreams.
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
                A leader is that person who, regardless of the future, is willing to teach what he knows so that together with his team he can achieve the proposed goals.
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
                Comfortable spaces are those that regardless of your culture you can feel comfortable, integrating these spaces can sometimes be a challenge for recruiters but choosing the right people can create a great place to work.
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
                Respect must be a required quality for companies today, I think that, regardless of the situation, we must be empathetic with our colleagues, each one is a world and despite that we are all human beings.
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
                Learning is a tool by which we can become more skilled at solving complex problems and it keeps us up to date with new technologies that arise every day.
                </span>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
