import Header from 'renderer/components/Header/Header';
import Section from 'renderer/components/Section/Section';

export default function Division() {
  return (
    <div>
      <Header />
      <Section title="Parametry programu">
        <div>test</div>
      </Section>
      <Section title="Dane wejściowe">
        {' '}
        <div>test</div>
      </Section>
      <Section title="Wynik">
        {' '}
        <div>test</div>
      </Section>
    </div>
  );
}
