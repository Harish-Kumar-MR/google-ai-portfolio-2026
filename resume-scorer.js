async function getAlignmentScore(resume, jd) {
  const prompt = `Compare this Resume: ${resume} with this Job Description: ${jd}. Give a match % and 3 gap bullet points.`;
  const response = await fetch('/api/score', {
    method: 'POST',
    body: JSON.stringify({ prompt })
  });
  return await response.json();
}
