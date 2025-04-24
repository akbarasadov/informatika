const COSTS = {
    bw: {
        A: { officer: 80000, soldier: 160000 },
        B: { officer: 240000, soldier: 120000 },
        C: { officer: 0, soldier: 80000 }
    },
    sw: {
        A: { officer: 100000, soldier: 200000 },
        B: { officer: 180000, soldier: 90000 },
        C: { officer: 120000, soldier: 0 }
    }
};

const MAX_BUDGET = 2000000;

function calculate(teamId, cost) {
    const officerCount = parseInt(document.getElementById(`${teamId}-officers`).value) || 0;
    const soldierCount = parseInt(document.getElementById(`${teamId}-soldiers`).value) || 0;

    const aOfficer = officerCount * cost.A.officer;
    const aSoldier = soldierCount * cost.A.soldier;
    const aTotal = aOfficer + aSoldier;

    const bOfficer = officerCount * cost.B.officer;
    const bSoldier = soldierCount * cost.B.soldier;
    const bTotal = bOfficer + bSoldier;

    const cTotal = (officerCount * cost.C.officer) + (soldierCount * cost.C.soldier);

    const grandTotal = aTotal + bTotal + cTotal;
    const diff = grandTotal - MAX_BUDGET;

    document.getElementById(`${teamId}-a-officer`).textContent = aOfficer.toLocaleString();
    document.getElementById(`${teamId}-a-soldier`).textContent = aSoldier.toLocaleString();
    document.getElementById(`${teamId}-a-total`).textContent = aTotal.toLocaleString();

    document.getElementById(`${teamId}-b-officer`).textContent = bOfficer.toLocaleString();
    document.getElementById(`${teamId}-b-soldier`).textContent = bSoldier.toLocaleString();
    document.getElementById(`${teamId}-b-total`).textContent = bTotal.toLocaleString();

    document.getElementById(`${teamId}-c-total`).textContent = cTotal.toLocaleString();
    document.getElementById(`${teamId}-grand-total`).textContent = grandTotal.toLocaleString();

    const diffCell = document.getElementById(`${teamId}-diff`);
    diffCell.textContent = diff.toLocaleString();

    if (grandTotal > MAX_BUDGET) {
        diffCell.style.backgroundColor = 'red';
        diffCell.style.color = 'white';
    } else {
        diffCell.style.backgroundColor = 'green';
        diffCell.style.color = 'white';
    }
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        calculate('bw', COSTS.bw);
        calculate('sw', COSTS.sw);
    });
});

window.onload = () => {
    calculate('bw', COSTS.bw);
    calculate('sw', COSTS.sw);
};