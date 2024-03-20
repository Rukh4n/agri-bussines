import React from "react";

function SongTable() {
    return (
        <div className="flex justify-center">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="Song">Song</th>
                        <th className="Artist">Artist</th>
                        <th className="Year">Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="Song">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="Artist">Malcolm Lockyer</td>
                        <td className="Year">1961</td>
                    </tr>
                    <tr>
                        <td className="Song">Witchy Woman</td>
                        <td className="Artist">The Eagles</td>
                        <td className="Year">1972</td>
                    </tr>
                    <tr>
                        <td className="Song">Shining Star</td>
                        <td className="Artist">Earth, Wind, and Fire</td>
                        <td className="Year">1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;
