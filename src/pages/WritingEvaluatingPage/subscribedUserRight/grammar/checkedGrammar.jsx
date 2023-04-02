import React, { useState, useEffect } from "react";
import { diff_match_patch as DiffMatchPatch } from "diff-match-patch";

const DiffComponent = ({ oldText, newText }) => {
	const [diffText, setDiffText] = useState("");

	useEffect(() => {
		const dmp = new DiffMatchPatch();
		console.log("dmp:", dmp);
		const diff = dmp.diff_main(oldText, newText);
		console.log("diffs:", diff);
		dmp.diff_cleanupSemantic(diff);
		const diffHtml = dmp.diff_prettyHtml(diff);
		setDiffText(diffHtml);
	}, [oldText, newText]);

	return <div dangerouslySetInnerHTML={{ __html: diffText }}></div>;
};

const CheckedGrammar = () => {
	const text = "The essay is well-structured and the ideas are clearly expressed. The essay is well-structured and the ideas are clearly expressed. The essay is well-structured and the ideas are clearly expressed.  The essay is well-structured and the ideas are clearly expressed.  The essay is well-structured and the ideas are clearly expressed. ";
	const checkedText = "The essay is well-structured and the ideas are clearly exprescd. The esasday is well-strstured and the ideas are clely expressed. The essay is well-strured and the ideas are clearly expressed.  The essay is well-structured and the ideas are clearly.  Tjaahe essay is well-structured and the ideas are clearly expressed. ";
	return (
		<div>
			<DiffComponent oldText={text} newText={checkedText} />
		</div>
	);
};

export default CheckedGrammar;
