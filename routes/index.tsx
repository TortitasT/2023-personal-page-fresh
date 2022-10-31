import { Fragment } from "preact";
import Header from "../components/Header.tsx";
import { Head } from "$fresh/runtime.ts";

export default function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>Tortitas Personal Page</title>
        <link rel="stylesheet" href="assets/css/main.min.css" />
      </Head>

      <Header />

      <main>
        <h1>Welcome</h1>

        <p>Welcome to my page!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
          tincidunt nulla. Aliquam ipsum justo, lobortis et ligula vel, dapibus
          fringilla massa. In bibendum nibh nisl, tincidunt lobortis orci
          blandit at. Cras feugiat mollis ullamcorper. Praesent auctor facilisis
          augue, eget pretium dui blandit nec. Nam lobortis, magna vitae
          scelerisque commodo, lorem nisi egestas tortor, sit amet maximus lacus
          mi vitae tellus. Etiam nec maximus sem, sed viverra turpis.

          Donec nec odio lorem. Nullam bibendum semper lacus. Nulla at quam in
          augue sodales viverra eu at nisl. Nunc venenatis nibh nec turpis
          faucibus, nec porttitor urna condimentum. Etiam in orci ornare,
          euismod nibh eu, viverra tellus. Donec et purus et magna aliquet
          tristique non quis augue. Duis id tortor ac orci pulvinar congue. Nunc
          aliquet, augue in malesuada vestibulum, felis elit porta neque, in
          ultricies turpis ligula nec risus. Proin sagittis augue sed elementum
          ornare. Maecenas eleifend elementum ullamcorper. Quisque fringilla
          nisl sed orci rhoncus, sed volutpat nisl rutrum. Praesent diam ex,
          mattis a neque a, tincidunt lobortis neque. Aenean tempus feugiat
          pulvinar. Aliquam in dui a elit vehicula tincidunt. Phasellus dolor
          nulla, faucibus eget diam vel, gravida bibendum libero. Curabitur
          efficitur diam gravida nibh sagittis fringilla.

          Cras et ipsum vel dolor suscipit dignissim. Proin pretium id lectus
          aliquam molestie. Morbi gravida lectus mi, sit amet accumsan sem
          aliquet a. Proin non rutrum augue. Quisque dictum congue condimentum.
          Morbi vitae malesuada justo. Vestibulum congue dolor id imperdiet
          dapibus.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Morbi sit amet massa aliquam, venenatis risus sit
          amet, facilisis ipsum. Vivamus velit neque, rutrum et dapibus at,
          molestie ac enim. In dictum ultrices nisi id varius. Nulla iaculis
          augue ut dapibus rutrum. In et convallis neque, id pellentesque felis.
          Vivamus quis est pellentesque, interdum lacus nec, gravida erat. Donec
          vel sodales magna. Phasellus semper ipsum dui, non facilisis neque
          vestibulum eget. Vivamus pellentesque sagittis magna eu imperdiet.

          Nullam quis nisl faucibus, consectetur massa sed, fermentum sem. Morbi
          tempor est vitae hendrerit porta. Proin accumsan, nunc id condimentum
          euismod, tellus nibh interdum ligula, eget hendrerit tellus tortor et
          eros. In nec sodales turpis, at efficitur erat. Donec at convallis
          elit. Quisque sit amet magna fringilla mi consectetur semper. Nam
          congue magna eget est porttitor, quis ullamcorper sem suscipit.
          Vivamus faucibus nec leo vitae pretium. Sed eu tellus magna. Donec in
          gravida purus. Aliquam id leo vitae odio ornare varius ut sit amet
          diam. Suspendisse condimentum egestas arcu, id congue leo sollicitudin
          et. Donec ut sollicitudin ante. Curabitur at sem felis. Nulla
          tincidunt eros nec ante mollis, et consectetur orci porta. Cras
          aliquet, arcu in dapibus varius, augue mi elementum arcu, vitae
          posuere mauris orci non augue.

          Proin condimentum mi urna, sed venenatis nibh malesuada venenatis.
          Quisque sit amet dolor elit. Fusce vel massa pharetra, rhoncus metus
          at, eleifend velit. Donec ac nunc a nunc semper rutrum sit amet in
          velit. Cras facilisis tortor in lorem venenatis tristique. Praesent
          libero mauris, scelerisque non pellentesque vitae, iaculis id neque.
          Nullam sit amet commodo nisl, ut aliquet lacus. Donec ut arcu porta,
          ullamcorper lacus vitae, ultrices augue. Aenean vulputate tristique
          lectus. Duis id massa massa. Pellentesque ultricies sem quis
          pellentesque facilisis. Sed a enim imperdiet, ullamcorper ligula sed,
          dapibus libero. Proin ex tortor, tempor a feugiat sit amet, interdum
          eget risus. Pellentesque eleifend tortor non vulputate accumsan. Fusce
          enim leo, congue non ante ut, tincidunt elementum eros.
        </p>
      </main>
    </Fragment>
  );
}
