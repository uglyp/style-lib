<template>
  <div class="box">
    <div class="loader loader--audioWave" />
    <div class="loader loader--spinningDisc" />
    <div class="loader loader--circularSquare" />
    <div class="loader loader--jing" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
/********/
/*######*/
/*******/
$colors: hsla(337, 84, 48, 0.75) hsla(160, 50, 48, 0.75) hsla(190, 61, 65, 0.75)
  hsla(41, 82, 52, 0.75);
$size: 2.5em;
$thickness: 0.5em;

//计算变量。
$lat: ($size - $thickness) / 2;
$offset: $lat - $thickness;
/********/
/*######*/
/*******/

.box {
  min-height: 32em;
  background: gainsboro;
}

.loader {
  margin: 5em auto;

  &--audioWave {
    $bg-list: ();
    $size-list: ();
    $n-bars: 5;
    $bar-top-c: #9b59b6;
    $bar-bottom-c: $bar-top-c;
    $bar-w: 0.5em;
    $bar-h: 2em;
    $bar-space: 0.125em;

    @for $i from 0 to $n-bars {
      $bg-list: $bg-list,
        linear-gradient($bar-top-c, $bar-bottom-c)
          if($i > 0, $i * ($bar-w + $bar-space), 0)
          50%;
      $size-list: $size-list, $bar-w $bar-h/8;
    }

    width: $n-bars * $bar-w + ($n-bars - 1) * $bar-space;
    height: $bar-h;
    background: $bg-list;
    background-repeat: no-repeat;
    background-size: $size-list;
    animation: audioWave 1.5s linear infinite;

    @at-root {
      @keyframes audioWave {
        @for $i from 0 to $n-bars {
          #{25% + $i*100%/8} {
            $bg-list: ();
            $size-list: ();
            $bar-full-exp-top-c: #3498db;
            $bar-full-exp-bottom-c: $bar-full-exp-top-c;

            @for $j from 0 to $n-bars {
              $bar-curr-top-c: $bar-top-c;
              $bar-curr-bottom-c: $bar-bottom-c;
              $bar-curr-h: $bar-h/8;

              @if $i == $j {
                $bar-curr-top-c: $bar-full-exp-top-c;
                $bar-curr-bottom-c: $bar-full-exp-bottom-c;
                $bar-curr-h: $bar-h;
              }

              $bg-list: $bg-list,
                linear-gradient($bar-curr-top-c, $bar-curr-bottom-c)
                  if($j > 0, $j * ($bar-w + $bar-space), 0)
                  50%;
              $size-list: $size-list, $bar-w $bar-curr-h;
            }

            background: $bg-list;
            background-repeat: no-repeat;
            background-size: $size-list;
          }
        }
      }
    }
  }

  &--spinningDisc {
    $d: 4em;
    $bw: 0.5em;
    $ccp: #3498db;
    $ccs: #2ecc71;
    $bcp: #9b59b6;
    $bcs: $ccp;

    border: solid $bw $bcp;
    border-right-color: transparent;
    border-left-color: transparent;
    padding: $bw;
    width: $d;
    height: $d;
    border-radius: 50%;
    background: $ccp;
    background-clip: content-box;
    animation: spinDisc 1.5s linear infinite;

    @at-root {
      @keyframes spinDisc {
        50% {
          border-top-color: $bcs;
          border-bottom-color: $bcs;
          background-color: $ccs;
        }
        100% {
          transform: rotate(1turn);
        }
      }
    }
  }

  &--circularSquare {
    $d: 1.25em;
    $ic: #9b59b6;
    $tlc: #2ecc71;
    $trc: #e74c3c;
    $blc: #3498db;
    $brc: #f1c40f;

    width: 0;
    height: 0;
    box-shadow: -$d/2 (-$d/2) 0 $d/2 $ic, $d/2 (-$d/2) 0 $d/2 $ic,
      -$d/2 $d/2 0 $d/2 $ic, $d/2 $d/2 0 $d/2 $ic;
    animation: circSquare 1.5s ease-in-out infinite;

    @at-root {
      @keyframes circSquare {
        50% {
          width: $d;
          height: $d;
          border-radius: 50%;
          transform: rotate(0.5turn);
          box-shadow: -2 * $d 0 0 $tlc, 2 * $d 0 0 $trc, -2 * $d 0 0 $blc,
            2 * $d 0 0 $brc;
        }
        80%,
        100% {
          transform: rotate(1turn);
        }
      }
    }
  }

  &--jing {
    position: relative;
    width: $size;
    height: $size;
    transform: rotate(165deg);

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: $thickness;
      height: $thickness;
      border-radius: $thickness / 2;
      transform: translate(-50%, -50%);
    }

    &:before {
      animation: before 2s infinite;
    }

    &:after {
      animation: after 2s infinite;
    }
  }

  @keyframes before {
    0% {
      width: $thickness;
      box-shadow: $lat (-$offset) nth($colors, 1),
        (-$lat) $offset nth($colors, 3);
    }
    35% {
      width: $size;
      box-shadow: 0 (-$offset) nth($colors, 1), 0 $offset nth($colors, 3);
    }
    70% {
      width: $thickness;
      box-shadow: (-$lat) (-$offset) nth($colors, 1),
        $lat $offset nth($colors, 3);
    }
    100% {
      box-shadow: $lat (-$offset) nth($colors, 1),
        (-$lat) $offset nth($colors, 3);
    }
  }

  @keyframes after {
    0% {
      height: $thickness;
      box-shadow: $offset $lat nth($colors, 2),
        (-$offset) (-$lat) nth($colors, 4);
    }
    35% {
      height: $size;
      box-shadow: $offset 0 nth($colors, 2), (-$offset) 0 nth($colors, 4);
    }
    70% {
      height: $thickness;
      box-shadow: $offset (-$lat) nth($colors, 2),
        (-$offset) $lat nth($colors, 4);
    }
    100% {
      box-shadow: $offset $lat nth($colors, 2),
        (-$offset) (-$lat) nth($colors, 4);
    }
  }
}
</style>
