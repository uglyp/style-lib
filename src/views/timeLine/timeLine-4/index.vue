<template>
  <div class="box">
    <div class="page">
      <div class="timeline">
        <div class="timeline__group">
          <span class="timeline__year time" aria-hidden="true">2008</span>
          <div class="timeline__cards">
            <div class="timeline__card card">
              <header class="card__header">
                <time class="time" datetime="2008-02-02">
                  <span class="time__day">2</span>
                  <span class="time__month">Feb</span>
                </time>
              </header>
              <div class="card__content">
                <p>
                  重叠的树影，微风吹动，轻轻颤抖，一份浓浓的伤悲，一份挥之不去的思念藏匿其中，悄无声息地洒落一地。
                </p>
              </div>
            </div>
            <div class="timeline__card card">
              <header class="card__header">
                <time class="time" datetime="2008-09-01">
                  <span class="time__day">1</span>
                  <span class="time__month">Sept</span>
                </time>
                <h3 class="card__title r-title">
                  sadfasdfasdf
                </h3>
              </header>
              <div class="card__content">
                <p>
                  重叠的树影，微风吹动，轻轻颤抖，一份浓浓的伤悲，一份挥之不去的思念藏匿其中，悄无声息地洒落一地。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline__group">
          <span class="timeline__year time" aria-hidden="true">2014</span>
          <div class="timeline__cards">
            <div class="timeline__card card">
              <header class="card__header">
                <time class="time" datetime="2008-07-14">
                  <span class="time__day">14</span>
                  <span class="time__month">Jul</span>
                </time>
              </header>
              <div class="card__content">
                <p>
                  重叠的树影，微风吹动，轻轻颤抖，一份浓浓的伤悲，一份挥之不去的思念藏匿其中，悄无声息地洒落一地。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline__group">
          <span class="timeline__year time" aria-hidden="true">2016</span>
          <div class="timeline__cards">
            <div class="timeline__card card">
              <header class="card__header">
                <time class="time" datetime="2008-08-18">
                  <span class="time__day">28</span>
                  <span class="time__month">Aug</span>
                </time>
              </header>
              <div class="card__content">
                <p>
                  重叠的树影，微风吹动，轻轻颤抖，一份浓浓的伤悲，一份挥之不去的思念藏匿其中，悄无声息地洒落一地。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.r-title {
  margin-top: var(--rTitleMarginTop, 0) !important;
  margin-bottom: var(--rTitleMarginBottom, 0) !important;
}

p:not([class]) {
  line-height: var(--cssTypographyLineHeight, 1.78);
  margin-top: var(--cssTypographyBasicMargin, 1em);
  margin-bottom: 0;
}

p:not([class]):first-child {
  margin-top: 0;
}

.text {
  display: var(--textDisplay, inline-flex);
  font-size: var(--textFontSize, 1rem);
}

.time {
  display: var(--timeDisplay, inline-flex);
}

.time__month {
  margin-left: var(--timelineMounthMarginLeft, 0.25em);
}

.time {
  padding: var(--timePadding, 0.25rem 1.25rem 0.25rem);
  background-color: var(--timeBackgroundColor, #f0f0f0);

  font-size: var(--timeFontSize, 0.75rem);
  font-weight: var(--timeFontWeight, 700);
  text-transform: var(--timeTextTransform, uppercase);
  color: var(--timeColor, currentColor);
}

.card {
  padding: var(--timelineCardPadding, 1.5rem 1.5rem 1.25rem);
}

.card__content {
  margin-top: var(--cardContentMarginTop, 0.5rem);
}

.card {
  border-radius: var(--timelineCardBorderRadius, 2px);
  border-left: var(--timelineCardBorderLeftWidth, 3px) solid
    var(--timelineCardBorderLeftColor, var(--uiTimelineMainColor));
  box-shadow: var(
    --timelineCardBoxShadow,
    0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 1px 2px 0 rgba(0, 0, 0, 0.24)
  );
  background-color: var(--timelineCardBackgroundColor, #fff);
}

.card__title {
  --rTitleMarginTop: var(--cardTitleMarginTop, 1rem);
  font-size: var(--cardTitleFontSize, 1.25rem);
}

.timeline {
  display: var(--timelineDisplay, grid);
  grid-row-gap: var(--timelineGroupsGap, 2rem);
}

.timeline__year {
  margin-bottom: 1.25rem; /* 1 */
}

.timeline__cards {
  display: var(--timeloneCardsDisplay, grid);
  grid-row-gap: var(--timeloneCardsGap, 1.5rem);
}

.timeline {
  --uiTimelineMainColor: var(--timelineMainColor, #222);
  --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);

  border-left: var(--timelineLineWidth, 3px) solid
    var(--timelineLineBackgroundColor, var(--uiTimelineMainColor));
  padding-top: 1rem;
  padding-bottom: 1.5rem;
}

.timeline__year {
  --timePadding: var(--timelineYearPadding, 0.5rem 1.5rem);
  --timeColor: var(--uiTimelineSecondaryColor);
  --timeBackgroundColor: var(--uiTimelineMainColor);
  --timeFontWeight: var(--timelineYearFontWeight, 400);
}

.timeline__card {
  position: relative;
  margin-left: var(--timelineCardLineGap, 1rem);
}

.timeline__cards {
  overflow: hidden;
  padding-top: 0.25rem; /* 1 */
  padding-bottom: 0.25rem; /* 1 */
}

.timeline__card::before {
  content: "";
  width: 20px;
  // width: 100%;
  height: var(--timelineCardLineWidth, 2px);
  background-color: var(
    --timelineCardLineBackgroundColor,
    var(--uiTimelineMainColor)
  );

  position: absolute;
  top: var(--timelineCardLineTop, 1rem);
  // left: -50%;
  left: -20px;
  z-index: 0;
}

.timeline {
  --timelineMainColor: #4557bb;
}

.box {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans,
    Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  color: #222;

  background-color: #f0f0f0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.5;
}

p:last-child {
  margin-bottom: 0;
}

.page {
  max-width: 47rem;
  padding: 5rem 2rem 3rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
