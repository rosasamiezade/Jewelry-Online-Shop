import guidePhoto from "../../images/imageonline-co-hueshifted (1).png";
import ring from "../../images/photo_2024-08-20_14-36-09.jpg";
interface SizeGuideProps {}

const SizeGuide: React.FC<SizeGuideProps> = (): JSX.Element => {
  return (
    <div className="bg-black text-white p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">
        Guide for measuring ring size using a ruler
      </h1>

      <div className="mb-6 ">
        <h3 className="text-xl font-semibold mb-2">
          Guide to measuring your ring size at home with the simplest and most
          convenient tools...!
        </h3>
        <p className="mb-2 text-left">
          Perhaps you're also looking for a way to easily and effortlessly
          measure your finger and ring size at home, using minimal and the most
          accessible tools.
        </p>
        <p className="mb-2 text-left">
          Today, we aim to teach you the easiest method, which requires only a
          few simple things that can be easily found in any home or anywhere!
        </p>
      </div>
      <div className="mb-6 text-left ">
        <h3 className="text-xl font-semibold mb-2">Required tools:</h3>
        <ol className="!list-decimal list-inside">
          <li>Ruler</li>
          <li>A strip of paper</li>
          <li>Some thread</li>
          <li>Scissors</li>
          <li>Transparent tape</li>
          <li>Pen or marker</li>
        </ol>
      </div>
      <div className="mb-6 text-left">
        <h3 className="text-xl font-semibold mb-2">
          Steps to measure ring size:
        </h3>
        <ol className="!list-decimal list-inside">
          <li>First, cut a piece of tape using scissors…</li>
          <li>
            Stick the cut tape to one end of the strip of paper or thread.
          </li>
          <li>
            Attach the tape on the paper to your finger and wrap the strip of
            paper or thread around the desired finger until it forms a ring
            around it.
          </li>
          <li>
            Now, mark the point where the two ends of the paper meet on your
            finger with a pen (exactly where the ends of the paper touch).
          </li>
          <li>At this stage, place the paper on a flat surface.</li>
          <li>
            Using the ruler, accurately measure the distance from the end of the
            paper to the mark you made with the pen.
          </li>
          <li>
            Compare the obtained number with the ring size chart (for example,
            58 mm corresponds to ring size 53/54).
          </li>
        </ol>
      </div>
      <img
        src={guidePhoto}
        alt="guidePhoto"
        style={{ width: "700px", height: "auto" }}
        className="rounded-sm m-auto"
      />
    </div>
  );
};

export default SizeGuide;
